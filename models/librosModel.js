// models/librosModel.js
const supabase = require("../supabaseClient");

const table = "libros";

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

const create = async (libro) => {
  const { data, error } = await supabase.from(table).insert(libro).select().single();
  if (error) throw error;
  return data;
};

const update = async (id, libro) => {
  const { data, error } = await supabase
    .from(table)
    .update(libro)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const remove = async (id) => {
  const { data, error } = await supabase.from(table).delete().eq("id", id).select().single();
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
