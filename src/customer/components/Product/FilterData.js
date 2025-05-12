export const color = [
    "white",
    "black",
    "red",
    "marun",
    "yellow",
    "green",
    "blue",
    "pink",
    "purple",
    "orange",
];
export const Filter = [
    {
        id: "color",
        name: "color",
        options: [
            { value: "white", label: "white" },
            { value: "black", label: "black" },
            { value: "red", label: "red" },
            { value: "marun", label: "marun" },
            { value: "yellow", label: "yellow" },
            { value: "green", label: "green" },
            { value: "blue", label: "blue" },
            { value: "pink", label: "pink" },
            { value: "purple", label: "purple" },
            { value: "orange", label: "orange" },
        ],
    },
    {
        id: "size",
        name: "size",
        options: [
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
            { value: "xxl", label: "XXL" },
        ],
    },
    // {
    //     id:"brand",
    //     name:"brand",
    //     options:[
    //         {value:"nike",label:"Nike"},
    //         {value:"puma",label:"Puma"},
    //         {value:"adidas",label:"Adidas"},
    //         {value:"rebook",label:"Rebook"},
    //         {value:"mizuno",label:"Mizuno"},
    //         {value:"new balance",label:"New Balance"},
    //         {value:"converse",label:"Converse"},
    //         {value:"skechers",label:"Skechers"},
    //         {value:"asics",label:"Asics"},
    //         {value:"vans",label:"Vans"},
    //     ],
    // }
]

export const singeFilters = [
    {
        id: "price",
        name: "price",
        options: [
            { value: "159-399", label: "159 To 399" },
            { value: "399-999", label: "399 To 999" },
            { value: "999-1999", label: "999 To 1999" },
            { value: "1999-2999", label: "1999 To 2999" },
            { value: "2999-4999", label: "2999 To 4999" },
        ],
    },
    {

        id: "discount",
        name: "Discount Range",
        options: [
            {
                value: "0-25",
                label: "0 To 25%"
            },
            { value: "0-65", label: "0 To 65%" },
            { value: "65-80", label: "65 To 80%" },
            { value: "80-100", label: "80 To 100%" },
        ],

    },
     {
        id: "stock",
        name: "Stock Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out of Stock" },
        ],
    }
]