import {Geometry} from "./geometry";
import {Properties} from "./properties";

export class Signalisation {
  private type: string;
  private geometry: Geometry;
  private properties: Properties;

  public constructor(type: string, geometry: Geometry, Properties: Properties) {
    this.type = type;
    this.geometry = geometry;
    this.properties = properties;

  }

  public getLocalisationLongitue(): number {
    return this.geometry.getLongitue();
  }

  public getLocalisationLatitude(): number {
    return this.geometry.getLatitude();
  }

  public getCode(): string {
    return this.properties.getCode();
  }

}
