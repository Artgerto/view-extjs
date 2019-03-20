Ext.define('App.view.personnel.PersonnelView',{
	extend: 'Ext.grid.Grid',
	xtype: 'personnelview',
	cls: 'personnelview',
	requires: ['Ext.grid.plugin.Editable'],
    plugins: {
        grideditable: true
    },
	controller: {type: 'personnelviewcontroller'},
	viewModel: {type: 'personnelviewmodel'},
	store: {type: 'personnelviewstore'},
    columns: [
        {
            text: 'Id',
            dataIndex: 'id',
            editable: false
        },
        {
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            cell: {userCls: 'bold'},
            editable: true
        },
        {
            text: 'Email',
            dataIndex: 'email',
            width: 230,
            editable: true
        },
        {
            text: 'Phone',
            dataIndex: 'phone',
            width: 150,
            editable: true
        }
    ]
});
