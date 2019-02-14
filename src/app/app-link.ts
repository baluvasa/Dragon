export class AppLink {
    public static get baseURL(): string { return "http://10.56.67.9:8082"; }
    public static get DTOptions() { 
        let dtOptions = {
            dom: 'Bfrtip',
            lengthMenu: [
                [ 10, 25, 50, -1 ],
                [ '10 Rows/Page', '25 Rows/Page', '50 Rows/Page', 'Show all' ]
            ],
            pagingType: 'full_numbers',
            buttons: [ 
                { extend: 'pageLength',class:'page_length'},
                { extend: 'colvis', text: 'Show/Hide Column'},
                { extend: 'excel', text: 'Export To Excel' }
            ]
          };
        return dtOptions; }
}
