import { createClient } from '@supabase/supabase-js'

// HARUS URL, BUKAN JWT Token
const supabaseUrl = 'https://fpfgusfubiiawabvpesu.supabase.co'

// HARUS JWT Token, BUKAN URL DATABASE
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZmd1c2Z1YmlpYXdhYnZwZXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTI0MzAsImV4cCI6MjA2NTQ2ODQzMH0.CVtYLizM0UdSqa_zRWBQv0dboj5_R0pnYT-WfqIr9DU'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
