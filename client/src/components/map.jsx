/* global kakao */
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // var container = document.getElementById('map');
    // var options = {
    //   center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
    //   level: 3,
    // };

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div
    var mapOption = {
      center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
      level: 4, // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // var map = new kakao.maps.Map(container, options);

    var imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const locations = [
      { x: 37.54699, y: 127.09598 },
      { x: 37.64699, y: 127.08598 },
    ];

    for (let location of locations) {
      // console.log('location: ', location);
      const { x, y } = location;

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        ),
        markerPosition = new kakao.maps.LatLng(x, y); // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      marker.setMap(map);
    }

    // // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    // var content =
    //   '<div class="customoverlay">' +
    //   '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
    //   '    <span class="title">구의야구공원</span>' +
    //   '  </a>' +
    //   '</div>';

    // // 커스텀 오버레이가 표시될 위치입니다
    // var position = new kakao.maps.LatLng(37.54699, 127.09598);

    // // 커스텀 오버레이를 생성합니다
    // var customOverlay = new kakao.maps.CustomOverlay({
    //   map: map,
    //   position: position,
    //   content: content,
    //   yAnchor: 1,
    // });

    // customOverlay.setMap();

    // kakao.maps.event.addListener(marker, 'mouseover', function () {
    //   customOverlay.setMap(map);
    // });

    // kakao.maps.event.addListener(marker, 'mouseout', function () {
    //   setTimeout(function () {
    //     customOverlay.setMap();
    //   });
    // });
  }, []);

  return <div id="map" className="map"></div>;
};

export default Map;

// /* global kakao */
// import React, { useEffect } from 'react';

// const Map = () => {
//   useEffect(() => {
//     // var container = document.getElementById('map');
//     // var options = {
//     //   center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
//     //   level: 3,
//     // };

//     var mapContainer = document.getElementById('map'); // 지도를 표시할 div
//     var mapOption = {
//       center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
//       level: 4, // 지도의 확대 레벨
//     };

//     var map = new kakao.maps.Map(mapContainer, mapOption);

//     // var map = new kakao.maps.Map(container, options);

//     var imageSrc =
//         'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
//       imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
//       imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

//     const locations = [
//       { x: 37.54699, y: 127.09598 },
//       { x: 37.64699, y: 127.08598 },
//     ];

//     for (let location of locations) {
//       console.log('location: ', location);
//     }

//     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//     var markerImage = new kakao.maps.MarkerImage(
//         imageSrc,
//         imageSize,
//         imageOption,
//       ),
//       markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

//     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//     var markerImage2 = new kakao.maps.MarkerImage(
//         imageSrc,
//         imageSize,
//         imageOption,
//       ),
//       markerPosition2 = new kakao.maps.LatLng(37.64699, 127.08598); // 마커가 표시될 위치입니다

//     // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//       position: markerPosition,
//       image: markerImage, // 마커이미지 설정
//     });

//     // 마커를 생성합니다
//     var marker2 = new kakao.maps.Marker({
//       position: markerPosition2,
//       image: markerImage2, // 마커이미지 설정
//     });

//     // 마커가 지도 위에 표시되도록 설정합니다
//     marker.setMap(map);
//     marker2.setMap(map);

//     // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     var content =
//       '<div class="customoverlay">' +
//       '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
//       '    <span class="title">구의야구공원</span>' +
//       '  </a>' +
//       '</div>';

//     // 커스텀 오버레이가 표시될 위치입니다
//     var position = new kakao.maps.LatLng(37.54699, 127.09598);

//     // 커스텀 오버레이를 생성합니다
//     var customOverlay = new kakao.maps.CustomOverlay({
//       map: map,
//       position: position,
//       content: content,
//       yAnchor: 1,
//     });

//     customOverlay.setMap();

//     kakao.maps.event.addListener(marker, 'mouseover', function () {
//       customOverlay.setMap(map);
//     });

//     kakao.maps.event.addListener(marker, 'mouseout', function () {
//       setTimeout(function () {
//         customOverlay.setMap();
//       });
//     });
//   }, []);

//   return <div id="map" className="map"></div>;
// };

// export default Map;
