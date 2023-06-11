-- TABLE FOR ACCEPTED REQUEST

CREATE TABLE IF NOT EXISTS public.accepted_request
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    user_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    CONSTRAINT accepted_request_pkey PRIMARY KEY (id),
    CONSTRAINT accepted_request_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY users.id;

    ALTER TABLE users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);

-- TABLE FOR DECLINE REQUEST

CREATE TABLE IF NOT EXISTS public.decline_request
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    CONSTRAINT decline_request_pkey PRIMARY KEY (id),
    CONSTRAINT decline_request_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- NOTIFICATION 

CREATE TABLE IF NOT EXISTS public.notification
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    user_id integer NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT notification_pkey PRIMARY KEY (id),
    CONSTRAINT notification_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- TABLE FOR PENDING REQ

CREATE TABLE IF NOT EXISTS public.pending_request
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    user_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    CONSTRAINT pending_request_pkey PRIMARY KEY (id),
    CONSTRAINT pending_request_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- TABLE FOR USERS 

CREATE TABLE IF NOT EXISTS public.users
(
    -- id integer NOT NULL DEFAULT 'nextval('users_id_seq'::regclass)',
    id integer NOT NULL,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(12) COLLATE pg_catalog."default" NOT NULL,
    role_id integer,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
);

-- TABLE FOR VSITOR_LOG

CREATE TABLE IF NOT EXISTS public.visitor_log
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    user_id integer NOT NULL,
    check_in_date date NOT NULL,
    check_in_time time without time zone NOT NULL,
    check_out_date date,
    check_out_time time without time zone,
    CONSTRAINT visitor_log_pkey PRIMARY KEY (id),
    CONSTRAINT visitor_log_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

-- TABLE FOR VISITS

CREATE TABLE IF NOT EXISTS public.visits
(
    id integer NOT NULL DEFAULT nextval('visits_id_seq'::regclass),
    user_id integer NOT NULL,
    visit_date date NOT NULL,
    visit_time time without time zone NOT NULL,
    purpose character varying COLLATE pg_catalog."default" NOT NULL,
    status character varying COLLATE pg_catalog."default" DEFAULT nextval('visits_id_seq'::regclass),
    CONSTRAINT visits_pkey PRIMARY KEY (id),
    CONSTRAINT visits_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE SEQUENCE IF NOT EXISTS public.visits_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;