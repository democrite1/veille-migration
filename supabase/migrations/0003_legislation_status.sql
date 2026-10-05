-- A law that a court struck down, or that a later law repealed, was still
-- displayed as "promulguée" because the schema only knew two states.
-- invalidee : annulée par une juridiction (ex. EO 14160, Cour suprême, 30/06/2026)
-- abrogee   : abrogée par un texte ultérieur (ex. Safety of Rwanda Act, 02/12/2025)
-- caduque   : projet devenu sans objet sans avoir été voté
alter table legislation drop constraint if exists legislation_status_check;
alter table legislation add constraint legislation_status_check
  check (status in ('promulguee', 'en_discussion', 'invalidee', 'abrogee', 'caduque'));
