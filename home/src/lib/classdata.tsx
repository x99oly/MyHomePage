import { TextboxInterface } from "@/interfaces/textbox-interface"
import { RepositoryClass } from "@/entities/repository"

export class ClassData {

  async GetTextBox(title: string): Promise<TextboxInterface | undefined> {
    const data = await this.GetDataFromJson("text-box", title);
    return data ? this.convertToTextboxInterface(data) : undefined;
  }

  async GetRepository(title: string): Promise<RepositoryClass | undefined> {
    const data = await this.GetDataFromJson("repositorys", title);
    return data ? this.convertToRepositoryClass(data) : undefined;
  }

  private async GetDataFromJson(
    origem: string,
    title: string
  ): Promise<{ [key: string]: string | string[] } | undefined> {
    const response = await fetch("/data/dados.json");
    const data = await response.json();

    const origemData = data.find(
      (item: { [key: string]: unknown }) => item[origem]
    );
    if (origemData) {
      const arrData = origemData[origem];
      const item = arrData.find(
        (entry: { [key: string]: string | string[] }) => entry[title]
      );
      return item ? item[title] : undefined;
    }
    return undefined;
  }

  private convertToRepositoryClass(item: {
    [key: string]: string | string[]
  }): RepositoryClass {
    return new RepositoryClass(item.title, item.img, item.link, item.about)
  }

  private convertToTextboxInterface(item: {
    [key: string]: string | string[];
  }): TextboxInterface {
    return {
      title: item.title,
      stacks: item.stacks,
      paragraphs: Array.isArray(item.paragraphs) ? item.paragraphs : [],
    };
  }

}
