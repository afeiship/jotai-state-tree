interface NxStatic {
  $get: (name?: string) => any;
  $set: (name: string, value: any) => void;
  $use: (name: string, options: any) => any;
}
