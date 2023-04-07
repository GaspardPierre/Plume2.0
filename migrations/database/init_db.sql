# 0. Je prends l'identité de admin

export PGUSER=plume # compte qui a tout les droits dont la création des base de données

# 1.initialisation de la BDD

# 1.1 Je supprime le user s'il existe et la BDD
dropdb plume
dropuser plume

# 1.2 Création du user et de la BDD

psql -f database/init_db.sql -d postgres 
-- Accorder les droits à l'utilisateur "plume" pour la base de données "plume"
GRANT CREATE, USAGE ON SCHEMA public TO plume;
GRANT CREATE ON DATABASE plume TO plume;

Je suouhaite accorder ces droits à la base de donnée plume