Ext.define('MyExtGenApp.view.notes.NotesViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.notesviewstore',
	requires: ['Ext.data.proxy.Rest','Ext.data.reader.Xml','Ext.data.writer.Xml'],
	fields: [
		{name: 'id', type: 'number'},{name: 'date', type: 'date'}, {name: 'title', type: 'string'}, {name:'text', type: 'string'}
	],
	// data: { items: [
	// 	{ id: 1, date: '2011/04/22',   title: "Первый", text: "Коммент 1" },
	// 	{ id: 2, date: '2011/04/22', title: "Второй",  text: "Коммент 2" },
	// 	{ id: 3, date: '2011/04/22',     title: "Третий",    text: "Коммент 3" },
	// 	{ id: 4, date: '2011/04/22',       title: "Четвертый",        text: "Коммент 4" }
	// ]},
	// proxy: {
	// 	type: 'memory',
	// 	reader: {
	// 		type: 'json',
	// 		rootProperty: 'items'
	// 	}
	// }
    proxy: {
        type: 'rest',
		url: 'http://localhost:8080/notes', // or a REST call
        cors: true,
        useDefaultXhrHeader : false,
		//method: 'GET',
		reader: {
        	type: 'xml',
			// totalRecords: 'results',
			record: 'item',
			rootProperty:'List'
		},
		writer: {
            type: 'xml'
		}
	},
	autoLoad: true,
    autoSync: true,
    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;
            if (name == 'Destroy') {
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
            Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
        }
    }
});
