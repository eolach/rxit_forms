interface Demographics {
    name: string;
    street: string;
    city: string;
    province: string;
    id: number;
}

export class Prescriber {
    constructor(
        public name: string,
        public street: string,
        public city: string,
        public province: string,
        public id: number,
        public statistics?: PrescriberStatistics,
        public delivery?: PrescriberDelivery,
        public admin?: PrescriberAdmin,
        public prepration?: PrescriberPreperation,
        public specification?: PrescriberSpecification
    ) {}
}

export class PrescriberStatistics {
    constructor (
        public total_pt_daily: '',
        public total_pt_weekly: '',
        public std_pt_daily: '',
        public std_pt_weekly: '',
        public ext_pt_daily: '',
        public ext_pt_weekly: '',
        public prop_ongoing_daily: '',
        public prop_ongoing_weekly: '',
        public total_rx_daily: '',
        public total_rx_weekly: '',
        public new_rx_daily: '',
        public new_rx_weekly: '',
        public renew_rx_daily: '',
        public renew_rx_weekly: '',
        public auth_rx_daily: '',
        public auth_rx_weekly: '',
        public multi_rx_daily: '',
        public multi_rx_weekly: '',
        public clarify_rx_daily: '',
        public clarify_rx_weekly: '',
        public request_rx_daily: '',
        public request_rx_weekly: '',
        public other_rx_daily: '',
        public other_rx_weekly: '',
        public other_rx_note: ''
    ) {}
}

export class PrescriberDelivery {
    constructor (
        public print: boolean,
        public fax: boolean,
        public phone: boolean,
        public e_rx: boolean
    ) {}
}

export class PrescriberAdmin {
    constructor () {}
}
export class PrescriberPreperation {
    constructor () {}
}


export class PrescriberSpecification {
    constructor () {}
}


export class Dispenser {
    constructor(
        public name: string,
        public street: string,
        public city: string,
        public province: string,
        public id: number
    ) {}
}

export class User {
    constructor (
        public id: number,
        public username: string,
        // public password: string,
        // public firstName: string,
        // public lastName: string,
        public participantType: number,
        public participantId: number,
        public prescriber: Prescriber,
        public dispenser: Dispenser
    ) {}

}
