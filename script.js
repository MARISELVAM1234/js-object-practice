
var laptopModel = [
    {
        Brand: "Dell",
        CPU: {
            Brand: "Intel",
            Name: "IO",
            Generator: 10
        },
        Os: "Windows",
        Ram: 8,
        Ssd: {
            Size: 220,
            Unit: "GB"
        },
        Gpu: "INDIA",
        ScreenSize: {
            Size: 12,
            Unit: "inch"
        },
        Price: 45000,
        Weight: {
            Weight: 4,
            Unit: "Kg"
        },
        Model: "KO748665",
        Delivery: 5,
        Prime: true
    },
    {
        Brand: "Hp",
        CPU: {
            Brand: "Intel",
            Name: "IO",
            Generator: 10
        },
        Os: "Windows",
        Ram: 16,
        Ssd: {
            Size: 400,
            Unit: "GB"
        },
        Gpu: "INDIA",
        ScreenSize: {
            Size: 12,
            Unit: "inch"
        },
        Price: 50000,
        Weight: {
            Weight: 8,
            Unit: "Kg"
        },
        Model: " KO7235465 ",
        Delivery: 6,
        Prime: true

    },
    {
        Brand: "lenovo",
        CPU: {
            Brand: "Intel",
            Name: "IO",
            Generator: 20
        },
        Os: "Windows",
        Ram: 8,
        Ssd: {
            Size: 500,
            Unit: "GB"
        },
        Gpu: "INDIA",
        ScreenSize: {
            Size: 17,
            Unit: "inch"
        },
        Price: 30000,
        Weight: {
            Weight: 7,
            Unit: "Kg"
        },
        Model: " KO7499908665 ",
        Delivery: 8,
        Prime: true

    }
]

function createFunction(primaryClass, primaryText, secondaryData) {

//    // create image
//         var imgElement  = document.createElement("img2")
//         imgElement.setAttribute("class" , "img");
//         console.log(imgElement);
//     innerBrandElement.append(imgElement);

    var primaryElement = document.createElement("span");
    primaryElement.textContent = primaryText;
    primaryElement.className = primaryClass;

    // secondaryData.forEach(function (secondaryElementData) {
    secondaryData.forEach(elementFunc);
    function elementFunc(secondaryElementData) {
        var secondaryElement = document.createElement("span");
        secondaryElement.innerText = secondaryElementData.text;

        if (secondaryElementData.classname !== "") {
            secondaryElement.setAttribute("class", secondaryElementData.classname);
        }
        primaryElement.append(secondaryElement);

    }
    // }) ;

    var innerBrandElement = document.createElement("div");
    innerBrandElement.append(primaryElement);
    return innerBrandElement;

}

var bodyElement = document.querySelector("body");


var brandFilterElements = document.querySelectorAll(".brand-filter");
brandFilterElements.forEach(function (brandFilter) {
    brandFilter.addEventListener("click", function () {
        var brandFilterElements = this.value
        function dataFunction(data) {
            var laptop = data;

            if (brandFilterElements == laptop.Brand) {
                // console.log("--------------------------");

                // create brandElement 
                var secondaryBrandElement = [
                    {
                        "classname": "brand-name",
                        "text": laptop.Brand
                    }
                ]
                var brandElement = createFunction("brand-id", "BRAND :", secondaryBrandElement);
                // console.log(brandElement);


                // create CPUElement
                var secondaryCpuElement = [
                    {
                        "classname": "cpu-name",
                        "text": laptop.CPU.Brand
                    }
                ]
                var cpuElement = createFunction("cpu-id", "CPU :", secondaryCpuElement);
                // console.log(cpuElement) ;


                //Create osElement
                var secondaryOsElement = [
                    {
                        "classname": "os-name",
                        "text": laptop.Os

                    }
                ]


                var osElement = createFunction("os-id", " OS:", secondaryOsElement);
                // console.log(osElement);

                //create RamElement
                var secondaryRamElement = [
                    {
                        "classname": "ram-name",
                        "text": laptop.Ram
                    }

                ]

                var ramElement = createFunction("ram-id", " Ram:", secondaryRamElement);
                // console.log(ramElement);

                //crate   SsdElement
                var secondarySsdElement = [
                    {
                        "classname": "ssd-name",
                        "text": laptop.Ssd.Size
                    },
                    {
                        "classname": "",
                        "text": laptop.Ssd.Unit
                    }
                ]


                var ssdElement = createFunction("os-id", " OS:", secondarySsdElement);
                // console.log(ssdElement);

                var classCont = document.createElement("div");
                classCont.setAttribute("class", "class-cont");
                classCont.style.border = "2px solid red";
                classCont.style.margin = "30px";
                classCont.style.color = "bisque";
                classCont.style.width = "300px";
                classCont.style.lineHeight = "25px"
                classCont.style.fontSize = "20px"
                classCont.append(brandElement);
                classCont.append(cpuElement);
                classCont.append(osElement);
                classCont.append(ramElement);
                classCont.append(ssdElement);

                console.log(classCont)
                bodyElement.append(classCont);
                // console.log("--------------------------");
            }
        }
        laptopModel.forEach(dataFunction);
    });
});
// var bodyElement = document.querySelector("body");

bodyElement.style.backgroundColor = "black";


// function filterFunc(filterContent) {
//     var secondaryDiv = document.createElement("div");
//     var labelElement = document.createElement("label");
//     var inputElement = document.createElement("input");


//     inputElement.setAttribute("type", "checkbox");
//     inputElement.setAttribute("name", "brand");
//     inputElement.setAttribute("value", "DELL");
//     inputElement.setAttribute("class", "brand-filter");


//     //   inputElement.textContent = filterContent. ;

//     secondaryDiv.append(labelElement);
//     labelElement.append(inputElement);
//     return secondaryDiv;

// }
// // var a = filterFunc();
// // console.log(a);

// function contentFunc(data2) {

//     console.log("----------------------------");

//     // create FirstContent

//     var dellElement = [
//         {
//             "text": laptop.Ssd.Size
//         }

//     ]
//     var FirstConElement = filterFunc(dellElement)
//     console.log(FirstConElement)



//     // create secContent

//     var hplement = [
//         {
//             "text": laptop.Ssd.Size
//         }

//     ]
//     var secConElement = filterFunc(hplement);
//     console.log(secConElement);


//     // create ThirdContent

//     var lenovoElement = [
//         {

//             "text": laptop.Ssd.Size
//         }

//     ]
//     var thirdConElement = filterFunc(lenovoElement);
//     console.log(thirdConElement);

//     console.log("----------------------------");
// }
