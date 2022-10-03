/* global kakao */
import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(36.07018, 127.07011), // 지도의 중심좌표
      level: 13, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    // DB에서 읽어올 부분
    const locations = [
      {
        place: '1번 장소',
        x: 37.54699,
        y: 127.09598,
        href: 'https://naver.com/',
        marketImageSrc:
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
      },
      {
        place: '2번 장소',
        x: 37.64699,
        y: 127.08598,
        href: 'https://google.com/',
        marketImageSrc:
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
      },
    ];

    for (let location of locations) {
      const { place, x, y, href, marketImageSrc } = location;

      // 마커의 이미지정보
      const imageSrc = marketImageSrc,
        // 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(24, 35), // 마커이미지의 크기입니다
        imageOption = {
          // offset: new kakao.maps.Point(27, 69),
          // coords:
          //   '16,0,20,2,24,6,26,10,26,16,23,22,17,25,14,35,13,35,9,25,6,24,2,20,0,16,0,10,2,6,6,2,10,0',
        }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        ),
        markerPosition = new kakao.maps.LatLng(x, y); // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      marker.setMap(map);

      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const content = `<div class="customoverlay">
          <a href="${href}" target="_blank">
            <span class="title">${place}</span>
          </a>
        </div>`;

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new kakao.maps.LatLng(x, y);

      // 커스텀 오버레이를 생성합니다
      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position,
        content,
        yAnchor: 0,
      });

      customOverlay.setMap();

      kakao.maps.event.addListener(marker, 'mouseover', function () {
        customOverlay.setMap(map);
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        window.open(href, '', '_blank');
      });

      kakao.maps.event.addListener(marker, 'mouseout', function () {
        setTimeout(function () {
          customOverlay.setMap();
        });
      });
    }
  }, []);

  return <div id="map" className="map"></div>;
};

export default Map;
