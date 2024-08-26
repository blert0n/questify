CREATE TABLE IF NOT EXISTS public."Notification" (
    id integer NOT NULL,
    description text,
    "ownerId" text,
    read boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "formId" text,
    CONSTRAINT "Notification_pkey" PRIMARY KEY (id)
);
COMMENT ON TABLE public."Notification" IS 'user notifications';

CREATE SEQUENCE IF NOT EXISTS public."Notification_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public."Notification_id_seq" OWNED BY public."Notification".id;

ALTER TABLE IF EXISTS public."Notification"
    ALTER COLUMN id SET DEFAULT nextval('public."Notification_id_seq"'::regclass);
