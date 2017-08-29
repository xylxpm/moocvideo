/**
 * Created by xuyanyfb on 2017/8/29.
 */
function createPlayerLisSection(videoUrl, imageUrl, width, height, videoDiv,resourceId) {
    jwplayer(videoDiv).setup({
        'width': width,
        'height': height,
        'file': videoUrl,
        'image': imageUrl,
        'analytics': {
            'cookies': false,
            'enabled': false
        },
        'primary': "html5",
        'preload': "none",
        'androidhls': "true",
        'abouttext': "Etiantian.com",
        'aboutlink': "http://www.etiantian.com",
        'autostart': "false",
        'startparam': "start"
    });

}

createPlayerLisSection("http://web.etiantian.com/ett20/hls/hd.m3u8?p=ceyw000026&s=b&t=1503975850&v=e5b2a489ca8ed484d6f501762ca05233&h=http%3A%2F%2Fhd.etiantian.com", "http://hd.etiantian.net/security/18cea474579589607559f949eb4041b2/59a4d9aa/etthd/ceyw000026/cover.jpg", "100%", "100%", 'videoDiv',407027);
