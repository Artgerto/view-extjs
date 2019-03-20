Ext.define('MyExtGenApp.view.notes.NotesView',{
	extend: 'Ext.grid.Grid',
	xtype: 'notesview',
	cls: 'notesview',
	requires: ['MyExtGenApp.view.notes.NotesViewStore','Ext.grid.CellEditor'],
	controller: {type: 'notesviewcontroller'},
	viewModel: {type: 'notesviewmodel'},
	store: {type: 'notesviewstore'},
	columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            editable: false
        },
		{ 
			text: 'Date',
			dataIndex: 'date',
            xtype: 'datecolumn',
            editable: true,
            format:'d/m/Y',
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'datefield',
                    dateFormat: 'd/m/Y',
                    allowBlank: false
                }
            }
		},
		{
			text: 'Title',
			dataIndex: 'title',
			width: 170,
			editable: true
		},
		{
			text: 'Text',
			dataIndex: 'text',
			width: 350,
            editable: true
		}
	],
    plugins: {
        grideditable: true
    }
	// listeners: {
	// 	select: 'onItemSelected'
	// }
});
