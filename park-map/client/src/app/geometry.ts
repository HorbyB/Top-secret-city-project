export class Geometry {
  private type: string;
  private coordinates: [number, number];

  public constructor(type: string, longitude: number, latitude: number) {
    this.type = type;
    this.coordinates[0] = longitude;
    this.coordinates[1] = latitude;
  }

  public getType(): string {
    return this.type;
  }

  public getLongitue(): number {
    return this.coordinates[0];
  }

  public getLatitude(): number {
    return this.coordinates[1];
  }

}
