Ext.define('App.view.personnel.PersonnelViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.personnelviewstore',
    fields: [
        {name: 'id', type: 'number'},'name', 'email', 'phone'
    ],
    data: { items: [
            { id: 1, name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { id: 2, name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
            { id: 3, name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
            { id: 4, name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444" }
        ]},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
