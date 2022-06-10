var jsonData = (responseBody);
var collection_data_metrics_list = JSON.parse(jsonData).collection_data_metrics_list;
var output_metrics_list;
if ( collection_data_metrics_list && collection_data_metrics_list.length > 0) {
    
    output_metrics_list = collection_data_metrics_list[0].output_metrics_list;
    console.log(new Date().toLocaleTimeString());
    console.log('metrics count: '+ output_metrics_list.length)

}
var total_byte = 0;
var total_count = 0;
var metrics;

if (output_metrics_list) {    
    for (var i = 0; i < output_metrics_list.length; i++) {
        metrics = output_metrics_list[i].metrics.key_value_metrics;
        
        const byte = metrics.find(value => value.name ==='total_output_bytes_count');
        const count = metrics.find(value => value.name === 'total_output_message_count');
        const timestamp = metrics.find(value=> value.name === 'last_output_time_msec');
        console.log('current output byte count:' + byte.value + ' timestamp: ' + timestamp.value);
        total_byte += byte.value;
        total_count += count.value;                     
        
    }
    
}
console.log('total byte count: ' + total_byte);
console.log('total message count: ' + total_count)
