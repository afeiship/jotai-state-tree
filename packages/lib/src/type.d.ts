interface NxStatic {
  $get: (name?: string) => any;
  $set: (name: string, value: any) => void;
  $use: (name: string, options: any) => any;
}

interface JotaiStateTreeProps {
  children: React.ReactNode;
  stores: Record<string, any>;
}
