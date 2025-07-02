import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import fs from 'fs/promises';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import cron from 'node-cron';

// Crear cliente de Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

const backupFolder = path.resolve('./backup');

async function ensureBackupFolder() {
    try {
        await fs.access(backupFolder);
    } catch {
        await fs.mkdir(backupFolder);
    }
}

// Función para hacer backup por tabla
async function backupTables() {
    const tables = ['libros', 'perfiles', 'prestamos', 'usuarios', 'socios']; // corregí duplicado "Planes"

    await ensureBackupFolder();

    const date = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'

    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
            console.error(`❌ Error en tabla "${table}":`, error.message);
            continue;
        }

        const filename = path.join(backupFolder, `backup-${table}-${date}.json`);
        await fs.writeFile(filename, JSON.stringify(data, null, 2));
        console.log(`✅ Backup guardado: ${filename}`);
    }
}

// Cron para correr cada 3 días a las 3 AM
cron.schedule('0 3 */3 * *', () => {
    console.log('🕒 Ejecutando backup programado...');
    backupTables();
});

// Ejecutar backup manual al iniciar
backupTables();
