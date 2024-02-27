function tsToDateTime(timestamp){
    const dateObject = new Date(timestamp);

    const hours = String(dateObject.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(dateObject.getUTCFullYear()).slice(-2);
  
    const convertedTimestamp = hours + ":" + minutes + " " + month + "-" + day + "-" + year;
  
    return convertedTimestamp;
}
module.exports= {
    tsToDateTime
}