// models/sociosModel.js
const supabase = require("../supabaseClient");

const table = "socios";

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
    .maybeSingle();
  if (error) throw error;
  return data;
};

const create = async (socio) => {
  const { data, error } = await supabase.from(table).insert(socio).single();
  if (error) throw error;
  return data;
};

const update = async (id, socio) => {
  const { data, error } = await supabase
    .from(table)
    .update(socio)
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
