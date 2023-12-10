import Head from "next/head";
interface P {
  title?: string;
}
const Meta = ({ title = "Questify" }: P) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
