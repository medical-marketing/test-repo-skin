import { createClient } from "@/prismicio";
import { client_tag } from "@/app/tag";

export const getSettings = async () => {
  const client = createClient();
  // const {settings} = await client.getSingle("settings");
  const docs = await client.getByEveryTag([client_tag]);

  //@ts-ignore
  const settings: SettingsRDocumentData = docs.results.find(
    (x) => x.type == "settings_r"
  );
  return settings;
};

export const getHeader = async (uid: string) => {
  const client = createClient();
  const header = await client.getByUID("header_r", uid);
  return header;
};

export const getFooter = async (uid: string) => {
  const client = createClient();
  const footer = await client.getByUID("footer_r", uid);
  return footer;
};
