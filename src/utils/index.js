/**
 * @file
 * @author liucan10(chuck7liu@gmail.com)
 */

export const normalizeTime = (time) => {
    const date = new Date(time),
        year = date.getFullYear() + '-',
        month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
        day = date.getDate() + ' ',
        hour = date.getHours() + ':',
        minute = date.getMinutes() + ':',
        second = date.getSeconds();
    return year + month + day + hour + minute + second
}