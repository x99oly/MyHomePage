import { TextboxInterface } from "@/interfaces/textbox-interface";

export class ClassData {

  async GetTextBox(title: string): Promise<TextboxInterface | undefined> {
    const data = await this.GetDataFromJson('text-box', title);
    return data ? this.convertToTextboxInterface(data) : undefined;
  }

  async GetDataFromJson(origem: string, title: string): Promise<any | undefined> {
    const response = await fetch("/data/dados.json");
    const data = await response.json();

    const origemData = data.find((item: any) => item[origem]);
    if (origemData) {
      const arrData = origemData[origem];
      const item = arrData.find((entry: any) => entry[title]);
      return item ? item[title] : undefined;
    }
    return undefined;
  }

  private convertToTextboxInterface(item: any): TextboxInterface {
    return {
      title: item.title,
      stacks: item.stacks,
      paragraphs: item.paragraphs
    };
  }
}
