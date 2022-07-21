export interface ConfigurationSchema{
    brands: Configuration;
    default: Configuration;
    fill: Configuration;
}

export interface Configuration {
    fontName: string;
    fontPath: string;
    glyphMap: GlyphMap<string>;
}

//Criado esquema de configuração para facilitar busca de fontes e glyph
const configuration = {
    brands: {
        fontName: "Interfocus-Brand",
        fontPath: require('../assets/fonts/brands/interfocus-brands.ttf'),
        glyphMap: require('../assets/fonts/brands/brands-map.json')
    },
    default: {
        fontName: "Interfocus-Default",
        fontPath: require('../assets/fonts/default/interfocus-default.ttf'),
        glyphMap: require('../assets/fonts/default/default-map.json')
    },
    fill:{
        fontName: "Interfocus-Fill",
        fontPath: require('../assets/fonts/fill/interfocus-fill.ttf'),
        glyphMap: require('../assets/fonts/fill/fill-map.json')
    }
};  

//Tipagem de nomes permitidos por familia para auxiliar o auto complete do VSCode
export type DefaultNames = "view"| "wifi"| "web"| "warning"| "wallet"| "waiting"| "users"|
"user-data"| "user"| "tv"| "switch"| "start"| "star"| "site"| "Signal"| "shopping-cart"| "shopping-bag"|
"share"| "settings"| "services"| "security"| "search"| "script"| "router"| "radio-button-selected"|
"radio-button"| "photo"| "phone-recharge"| "phone"| "pending"| "pdf"| "paused"| "paid"| "overdue-connected"|
"overdue"| "other"| "no-cable"| "new"| "logout"| "log"| "link"| "late"| "invoice"| "info"| "home"| "help-bubble"|
"help"| "headset"| "garbage"| "financial"| "filter"| "feedback"| "excel"| "email"| "edit"| "download"|"dont-view"|
"document"| "credit-card"| "copy"| "contract"| "connected-active"| "close" |"chevron-up"| "chevron-right"| "chevron-left"|
"chevron-down"| "check"| "change"| "cancelar"| "box"| "bookmark"| "bill"| "audit"| "arrow-up"| "arrow-right"| "arrow-left"|
"arrow-down"| "app"| "add";

export type FillNames = "warning" | "wallet" | "users" | "user-data" | "user" | "switch" | "start" | "star" | "site" | "shopping-cart" |
"shopping-bag" | "share" | "settings" | "services" |  "security" | "search" | "script" | "router" | "photo" | "phone-recharge" |
"phone" | "pdf" | "other" | "logout" | "log" | "link" | "invoice" | "info" | "home" | "help-bubble" | "help" | "headset" |
"garbage" |  "financial" | "filter" | "feedback" | "excel" | "email" | "edit" | "download" | "document" | "credit-card" |
"copy" | "contract" | "close" | "check" | "change" | "cancelar" | "box" | "bookmark" | "bill" |  "audit" | "arrow-up" |
"arrow-right" | "arrow-left" | "arrow-down" | "app" | "add";  

export type BrandNames = 'youtube-fill' |  'youtube' |  'twitter-fill' | 'twitter' | 'linkedin-fill' |
'linkedin' | 'instagram-fill' | 'instagram' | 'facebook-fill' | 'facebook';


export default configuration;
