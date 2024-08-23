SET check_function_bodies = false;
CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
CREATE TYPE public."FormType" AS ENUM (
    'SHORT',
    'LONG',
    'SINGLE_CHOICE',
    'MULTIPLE_CHOICE',
    'DROPDOWN',
    'LINEAR_SCALE',
    'DATE'
);
CREATE TABLE public."Answer" (
    id text NOT NULL,
    value text NOT NULL,
    "formItemId" text,
    "responseId" text
);
CREATE TABLE public."Folder" (
    id text NOT NULL,
    name text NOT NULL,
    "ownerId" text NOT NULL
);
CREATE TABLE public."Form" (
    id text NOT NULL,
    name text NOT NULL,
    "ownerId" text NOT NULL,
    "order" integer NOT NULL,
    style jsonb,
    favorite boolean DEFAULT false NOT NULL,
    "folderId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    responses integer DEFAULT 0 NOT NULL
);
CREATE TABLE public."FormItem" (
    id text NOT NULL,
    name text NOT NULL,
    "order" integer NOT NULL,
    section integer DEFAULT 0 NOT NULL,
    "formId" text NOT NULL,
    required boolean DEFAULT false NOT NULL,
    items jsonb,
    image jsonb,
    type public."FormType" NOT NULL
);
CREATE SEQUENCE public."FormItem_order_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."FormItem_order_seq" OWNED BY public."FormItem"."order";
CREATE SEQUENCE public."Form_order_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Form_order_seq" OWNED BY public."Form"."order";
CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    last_seen timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.users IS 'users';
ALTER TABLE ONLY public."Form" ALTER COLUMN "order" SET DEFAULT nextval('public."Form_order_seq"'::regclass);
ALTER TABLE ONLY public."FormItem" ALTER COLUMN "order" SET DEFAULT nextval('public."FormItem_order_seq"'::regclass);
ALTER TABLE ONLY public."Answer"
    ADD CONSTRAINT "Answer_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Folder"
    ADD CONSTRAINT "Folder_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."FormItem"
    ADD CONSTRAINT "FormItem_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Form"
    ADD CONSTRAINT "Form_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE INDEX "Folder_ownerId_name_idx" ON public."Folder" USING btree ("ownerId", name);
CREATE UNIQUE INDEX "Folder_ownerId_name_key" ON public."Folder" USING btree ("ownerId", name);
CREATE INDEX "Form_ownerId_name_idx" ON public."Form" USING btree ("ownerId", name);
CREATE UNIQUE INDEX "Form_ownerId_name_key" ON public."Form" USING btree ("ownerId", name);
ALTER TABLE ONLY public."Answer"
    ADD CONSTRAINT "Answer_formItemId_fkey" FOREIGN KEY ("formItemId") REFERENCES public."FormItem"(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public."FormItem"
    ADD CONSTRAINT "FormItem_formId_fkey" FOREIGN KEY ("formId") REFERENCES public."Form"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Form"
    ADD CONSTRAINT "Form_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES public."Folder"(id) ON UPDATE CASCADE ON DELETE SET NULL;
