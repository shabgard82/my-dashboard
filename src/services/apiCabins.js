import supabase from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("cabin could not be loaded");
  }
  return cabins;
}

export async function DeleteCabins(id) {
  const { data: cabins, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);
  if (error) {
    throw new Error("cabin could not be deleted");
  }
  return cabins;
}
