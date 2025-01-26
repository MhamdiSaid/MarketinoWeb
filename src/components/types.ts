

// the product object type :
// this type for the caracteristics of a specific product
export type caracteristicsType={type:string,value:string};

// the variant object type, it represents a variant row
export type variantType = {
    input_type: string;
    section: string;
    valuespattern: string;
    variant_id: number;
  };
  
  // The variants state variable type, representing the variant information
  // along with the value of that product's variant:
  export interface variantStateWithoutCheckbox extends variantType {
    value: string;  // Single value for non-checkbox
  }
  
  // For checkbox input, we expect value to be an array of strings
  export interface variantStateWithCheckbox extends variantType {
    value: string[];  // Array of values for checkbox
    input_type: "checkbox";  // This ensures it's for a checkbox input
  }
  
  // Union type for variant state that could either be a non-checkbox or checkbox type
  export type variantState = variantStateWithoutCheckbox | variantStateWithCheckbox;// the product object type: represents the product object

export type productType={
    caracteristics:caracteristicsType[],
    contact_type:string,
    description:string,
    discount: number,
    price: number,
    productid: number,
    productname: string,
    reviews:object[],
    scarcity: string,
    shipping_cost: number,
    stock_quantity: number,
    stock_status: string,
    storename: string,
    sub_path:string,
    variants:variantState[]
};