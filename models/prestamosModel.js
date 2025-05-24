// models/prestamosModel.js
const supabase = require("../supabaseClient");

const table = "prestamos";

const getAll = async () => {
  const { data, error } = await supabase.from(table).select("*");
  if (error) throw error;
  return data;
};

const getById = async (id) => {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

const create = async (prestamo) => {
  const { data, error } = await supabase.from(table).insert(prestamo).single();
  if (error) throw error;
  return data;
};

const update = async (id, prestamo) => {
  const { data, error } = await supabase
    .from(table)
    .update(prestamo)
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

const remove = async (id) => {
  const { data, error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
  return data;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
