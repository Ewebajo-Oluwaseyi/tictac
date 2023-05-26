import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vewhzwnykoujirjuzgjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZld2h6d255a291amlyanV6Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMDg3OTIsImV4cCI6MTk5MjY4NDc5Mn0.vZTddma-letSjAXJqRg44T4rjCjS1lsbWy73Qg_F50U";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      eventsPerSecond: 20,
    },
  },
});
