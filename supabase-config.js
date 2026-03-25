// supabase-config.js — Configuração do Cliente Supabase

const SUPABASE_URL = 'https://hupcpipbnlcfwnvbljzk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1cGNwaXBibmxjZndudmJsanprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MzEyNjIsImV4cCI6MjA5MDAwNzI2Mn0.7Rqz9ihGrtWYM72Y5WeKTQ083gXxFIhBOb7otU_IPQ8';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
