// models/usuariosModel.js
const supabase = require("../supabaseClient");

const table = "usuarios";

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

const create = async (usuario) => {
  const { data, error } = await supabase.from(table).insert(usuario).single();
  if (error) throw error;
  return data;
};

const update = async (id, usuario) => {
  const { data, error } = await supabase
    .from(table)
    .update(usuario)
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
