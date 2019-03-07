import {IMyDpOptions} from 'mydatepicker';
export class AppLink {
    public static get myDatePickerOptions() {
        let IMyDpOptions = {
            dateFormat: 'dd-mmm-yyyy',
            inline:false,
            editableDateField:false,
            openSelectorOnInputClick:true
        };
        return IMyDpOptions;
    }
 
    public static get baseURL(): string { return "http://10.56.67.9:8082"; }
    public static get DTOptions() { 
        let dtOptions = {
            dom: 'Bfrtip<t>ip',
            lengthMenu: [
                [ 10, 25, 50, -1 ],
                [ '10 Rows/Page', '25 Rows/Page', '50 Rows/Page', 'Show all' ]
            ],
            pagingType: 'full_numbers',
            buttons: [ 
                { extend: 'pageLength',class:'page_length'},
                // { extend: 'colvis', text: 'Show/Hide Column'},
                { extend: 'excel', text: 'Export To Excel' }
            ]
        };
        return dtOptions;
    }
    public static get access_type() { 
        let accessTypes = [{role:'ADMIN',type:'Admin User'},{role:'NORMAL',type:'Normal User'}];
        return accessTypes; 
    }
    public static get band() { 
        let bands = [{code:'U1',type:'U1'},{code:'U2',type:'U2'},{code:'U3',type:'U3'},{code:'U4',type:'U4'},{code:'P1',type:'P1'},{code:'P2',type:'P2'},{code:'E1',type:'E1'},{code:'E2',type:'E2'}];
        return bands; 
    }
    public static get location() { 
        let locations = [{code:'ofs',type:'Offshore'},{code:'os',type:'OnSite'}];
        return locations; 
    }
    public static get approvalmethods() { 
        let approvalMethods = [{code:'cm',type:'Customer Mail'}];
        return approvalMethods; 
    }
    public static get submitionmodes() { 
        let submitionModes = [{code:'email',type:'EMail'},{code:'ehc',type:'Email/Hard Copy'},{code:'na',type:'NA'}];
        return submitionModes; 
    }
    public static get status() { 
        let statuses = [{code:'ACTIVE',type:'Active'},{code:'INACTIVE',type:'In Active'}];
        return statuses; 
    }
    public static get billingcurrency() { 
        let billingcurrencys = [{currency: "Albania Lek",abbreviation: "ALL",symbol: "&#76;&#101;&#107;"},{currency: "Afghanistan Afghani",abbreviation: "AFN",symbol: "&#1547;"},{currency: "Argentina Peso",abbreviation: "ARS",symbol: "&#36;"},{currency: "Aruba Guilder",abbreviation: "AWG",symbol: "&#402;"},{currency: "Australia Dollar",abbreviation: "AUD",symbol: "&#36;"},{currency: "Azerbaijan New Manat",abbreviation: "AZN",symbol: "&#1084;&#1072;&#1085;"},{currency: "Bahamas Dollar",abbreviation: "BSD",symbol: "&#36;"},{currency: "Barbados Dollar",abbreviation: "BBD",symbol: "&#36;"},{currency: "Belarus Ruble",abbreviation: "BYR",symbol: "&#112;&#46;"},{currency: "Belize Dollar",abbreviation: "BZD",symbol: "&#66;&#90;&#36;"},{currency: "Bermuda Dollar",abbreviation: "BMD",symbol: "&#36;"},{currency: "Bolivia Boliviano",abbreviation: "BOB",symbol: "&#36;&#98;"},{currency: "Bosnia and Herzegovina Convertible Marka",abbreviation: "BAM",symbol: "&#75;&#77;"},{currency: "Botswana Pula",abbreviation: "BWP",symbol: "&#80;"},{currency: "Bulgaria Lev",abbreviation: "BGN",symbol: "&#1083;&#1074;"},{currency: "Brazil Real",abbreviation: "BRL",symbol: "&#82;&#36;"},{currency: "Brunei Darussalam Dollar",abbreviation: "BND",symbol: "&#36;"},{currency: "Cambodia Riel",abbreviation: "KHR",symbol: "&#6107;"},{currency: "Canada Dollar",abbreviation: "CAD",symbol: "&#36;"},{currency: "Cayman Islands Dollar",abbreviation: "KYD",symbol: "&#36;"},{currency: "Chile Peso",abbreviation: "CLP",symbol: "&#36;"},{currency: "China Yuan Renminbi",abbreviation: "CNY",symbol: "&#165;"},{currency: "Colombia Peso",abbreviation: "COP",symbol: "&#36;"},{currency: "Costa Rica Colon",abbreviation: "CRC",symbol: "&#8353;"},{currency: "Croatia Kuna",abbreviation: "HRK",symbol: "&#107;&#110;"},{currency: "Cuba Peso",abbreviation: "CUP",symbol: "&#8369;"},{currency: "Czech Republic Koruna",abbreviation: "CZK",symbol: "&#75;&#269;"},{currency: "Denmark Krone",abbreviation: "DKK",symbol: "&#107;&#114;"},{currency: "Dominican Republic Peso",abbreviation: "DOP",symbol: "&#82;&#68;&#36;"},{currency: "East Caribbean Dollar",abbreviation: "XCD",symbol: "&#36;"},{currency: "Egypt Pound",abbreviation: "EGP",symbol: "&#163;"},{currency: "El Salvador Colon",abbreviation: "SVC",symbol: "&#36;"},{currency: "Estonia Kroon",abbreviation: "EEK",symbol: "&#107;&#114;"},{currency: "Euro Member Countries",abbreviation: "EUR",symbol: "&#8364;"},{currency: "Falkland Islands (Malvinas) Pound",abbreviation: "FKP",symbol: "&#163;"},{currency: "Fiji Dollar",abbreviation: "FJD",symbol: "&#36;"},{currency: "Ghana Cedis",abbreviation: "GHC",symbol: "&#162;"},{currency: "Gibraltar Pound",abbreviation: "GIP",symbol: "&#163;"},{currency: "Guatemala Quetzal",abbreviation: "GTQ",symbol: "&#81;"},{currency: "Guernsey Pound",abbreviation: "GGP",symbol: "&#163;"},{currency: "Guyana Dollar",abbreviation: "GYD",symbol: "&#36;"},{currency: "Honduras Lempira",abbreviation: "HNL",symbol: "&#76;"},{currency: "Hong Kong Dollar",abbreviation: "HKD",symbol: "&#36;"},{currency: "Hungary Forint",abbreviation: "HUF",symbol: "&#70;&#116;"},{currency: "Iceland Krona",abbreviation: "ISK",symbol: "&#107;&#114;"},{currency: "India Rupee",abbreviation: "INR",symbol: null},{currency: "Indonesia Rupiah",abbreviation: "IDR",symbol: "&#82;&#112;"},{currency: "Iran Rial",abbreviation: "IRR",symbol: "&#65020;"},{currency: "Isle of Man Pound",abbreviation: "IMP",symbol: "&#163;"},{currency: "Israel Shekel",abbreviation: "ILS",symbol: "&#8362;"},{currency: "Jamaica Dollar",abbreviation: "JMD",symbol: "&#74;&#36;"},{currency: "Japan Yen",abbreviation: "JPY",symbol: "&#165;"},{currency: "Jersey Pound",abbreviation: "JEP",symbol: "&#163;"},{currency: "Kazakhstan Tenge",abbreviation: "KZT",symbol: "&#1083;&#1074;"},{currency: "Korea (North) Won",abbreviation: "KPW",symbol: "&#8361;"},{currency: "Korea (South) Won",abbreviation: "KRW",symbol: "&#8361;"},{currency: "Kyrgyzstan Som",abbreviation: "KGS",symbol: "&#1083;&#1074;"},{currency: "Laos Kip",abbreviation: "LAK",symbol: "&#8365;"},{currency: "Latvia Lat",abbreviation: "LVL",symbol: "&#76;&#115;"},{currency: "Lebanon Pound",abbreviation: "LBP",symbol: "&#163;"},{currency: "Liberia Dollar",abbreviation: "LRD",symbol: "&#36;"},{currency: "Lithuania Litas",abbreviation: "LTL",symbol: "&#76;&#116;"},{currency: "Macedonia Denar",abbreviation: "MKD",symbol: "&#1076;&#1077;&#1085;"},{currency: "Malaysia Ringgit",abbreviation: "MYR",symbol: "&#82;&#77;"},{currency: "Mauritius Rupee",abbreviation: "MUR",symbol: "&#8360;"},{currency: "Mexico Peso",abbreviation: "MXN",symbol: "&#36;"},{currency: "Mongolia Tughrik",abbreviation: "MNT",symbol: "&#8366;"},{currency: "Mozambique Metical",abbreviation: "MZN",symbol: "&#77;&#84;"},{currency: "Namibia Dollar",abbreviation: "NAD",symbol: "&#36;"},{currency: "Nepal Rupee",abbreviation: "NPR",symbol: "&#8360;"},{currency: "Netherlands Antilles Guilder",abbreviation: "ANG",symbol: "&#402;"},{currency: "New Zealand Dollar",abbreviation: "NZD",symbol: "&#36;"},{currency: "Nicaragua Cordoba",abbreviation: "NIO",symbol: "&#67;&#36;"},{currency: "Nigeria Naira",abbreviation: "NGN",symbol: "&#8358;"},{currency: "Korea (North) Won",abbreviation: "KPW",symbol: "&#8361;"},{currency: "Norway Krone",abbreviation: "NOK",symbol: "&#107;&#114;"},{currency: "Oman Rial",abbreviation: "OMR",symbol: "&#65020;"},{currency: "Pakistan Rupee",abbreviation: "PKR",symbol: "&#8360;"},{currency: "Panama Balboa",abbreviation: "PAB",symbol: "&#66;&#47;&#46;"},{currency: "Paraguay Guarani",abbreviation: "PYG",symbol: "&#71;&#115;"},{currency: "Peru Nuevo Sol",abbreviation: "PEN",symbol: "&#83;&#47;&#46;"},{currency: "Philippines Peso",abbreviation: "PHP",symbol: "&#8369;"},{currency: "Poland Zloty",abbreviation: "PLN",symbol: "&#122;&#322;"},{currency: "Qatar Riyal",abbreviation: "QAR",symbol: "&#65020;"},{currency: "Romania New Leu",abbreviation: "RON",symbol: "&#108;&#101;&#105;"},{currency: "Russia Ruble",abbreviation: "RUB",symbol: "&#1088;&#1091;&#1073;"},{currency: "Saint Helena Pound",abbreviation: "SHP",symbol: "&#163;"},{currency: "Saudi Arabia Riyal",abbreviation: "SAR",symbol: "&#65020;"},{currency: "Serbia Dinar",abbreviation: "RSD",symbol: "&#1044;&#1080;&#1085;&#46;"},{currency: "Seychelles Rupee",abbreviation: "SCR",symbol: "&#8360;"},{currency: "Singapore Dollar",abbreviation: "SGD",symbol: "&#36;"},{currency: "Solomon Islands Dollar",abbreviation: "SBD",symbol: "&#36;"},{currency: "Somalia Shilling",abbreviation: "SOS",symbol: "&#83;"},{currency: "South Africa Rand",abbreviation: "ZAR",symbol: "&#82;"},{currency: "Korea (South) Won",abbreviation: "KRW",symbol: "&#8361;"},{currency: "Sri Lanka Rupee",abbreviation: "LKR",symbol: "&#8360;"},{currency: "Sweden Krona",abbreviation: "SEK",symbol: "&#107;&#114;"},{currency: "Switzerland Franc",abbreviation: "CHF",symbol: "&#67;&#72;&#70;"},{currency: "Suriname Dollar",abbreviation: "SRD",symbol: "&#36;"},{currency: "Syria Pound",abbreviation: "SYP",symbol: "&#163;"},{currency: "Taiwan New Dollar",abbreviation: "TWD",symbol: "&#78;&#84;&#36;"},{currency: "Thailand Baht",abbreviation: "THB",symbol: "&#3647;"},{currency: "Trinidad and Tobago Dollar",abbreviation: "TTD",symbol: "&#84;&#84;&#36;"},{currency: "Turkey Lira",abbreviation: "TRY",symbol: null},{currency: "Turkey Lira",abbreviation: "TRL",symbol: "&#8356;"},{currency: "Tuvalu Dollar",abbreviation: "TVD",symbol: "&#36;"},{currency: "Ukraine Hryvna",abbreviation: "UAH",symbol: "&#8372;"},{currency: "United Kingdom Pound",abbreviation: "GBP",symbol: "&#163;"},{currency: "United States Dollar",abbreviation: "USD",symbol: "&#36;"},{currency: "Uruguay Peso",abbreviation: "UYU",symbol: "&#36;&#85;"},{currency: "Uzbekistan Som",abbreviation: "UZS",symbol: "&#1083;&#1074;"},{currency: "Venezuela Bolivar",abbreviation: "VEF",symbol: "&#66;&#115;"},{currency: "Viet Nam Dong",abbreviation: "VND",symbol: "&#8363;"},{currency: "Yemen Rial",abbreviation: "YER",symbol: "&#65020;"},{currency: "Zimbabwe Dollar",abbreviation: "ZWD",symbol: "&#90;&#36;"}];
        return billingcurrencys; 
    }
    public static dateRange(startDate, endDate) {
        var monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var start      = startDate.split('-');
          var end        = endDate.split('-');
          var startYear  = parseInt(start[2]);
          var endYear    = parseInt(end[2]);
          var dates      = [];
          for(var i = startYear; i <= endYear; i++) {
            var endMonth = i != endYear ? 11 :monthShortNames.indexOf(end[1]);
            var startMon = i === startYear ? monthShortNames.indexOf(start[1]): 0;
            for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
              var month = j;
              var displayMonth=monthShortNames[month];
              dates.push([displayMonth,i].join('-'));
            }
          }  
          return dates;
        }
        
}