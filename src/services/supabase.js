import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hxrwdblidozrlhdsvhfi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4cndkYmxpZG96cmxoZHN2aGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5Nzc4ODksImV4cCI6MjAzMTU1Mzg4OX0.uz7_-vOlC7k_-BYNsKJwQWNgOcyzLfAxNSyMmshnA7U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
