# NameMC JSON Parser

An Express.js applet that mirrors NameMC profiles and outputs raw JSON representations of the data being presented.

### Usage
JSON representations are available at `localhost:3000/name/:id`. For example, replacing `:id` with `Thug` will yield the following output:
`[  
    {  
        "uuid": "8cf50b78-22d5-4b71-840a-f49f311f03fb",
        "history": [  
            {  
                "name":"Thug",
                "date":"2015-06-02T13:45:29.000Z"
            },
            {  
                "name":"Lake",
                "date":"2015-05-28T12:37:56.000Z"
            },
            {  
                "name":"Thug",
                "date":"2015-05-27T14:36:14.000Z"
            },
            {  
                "name":"Lake"
            }
        ]
    }
]`
