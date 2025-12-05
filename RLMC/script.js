(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Label_F5584FC2_E065_C724_41C7_D60D970FCD62",
  "this.Image_F4AF7829_E09D_4965_41D2_BBE1D6B83820"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "definitions": [{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "GYM",
 "id": "panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9",
 "overlays": [
  "this.overlay_7EEE163D_6F51_CAA2_41AE_6B73424771F1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -117.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7D9CA48_E5D2_0616_41C3_EF503ACD5C44",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 133.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 4.25,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 4.25,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 4.25,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F560E72E_E5D2_0E6D_41AE_57CF3B976463",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Girls Hostel room",
 "id": "panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1",
 "overlays": [
  "this.overlay_7A1CA2C9_6FD1_CBE3_4181_AFB7C7EEB65C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside left Labs on GF",
 "id": "panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B",
 "overlays": [
  "this.overlay_FCE48823_E4A7_53A0_41B2_37F00C03B09E",
  "this.overlay_FC5376C8_E4A7_DCE0_41DF_90EEBFF36161",
  "this.overlay_FD8909FE_E4AB_B4A0_41E6_4D3FD70750F6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -154.23,
   "class": "AdjacentPanorama",
   "backwardYaw": 49.91,
   "panorama": "this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -85.89,
   "class": "AdjacentPanorama",
   "backwardYaw": 99.85,
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Conference Room",
 "id": "panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0",
 "overlays": [
  "this.overlay_F18DD6F1_E06A_C6E4_41E9_88C22330F016"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dentistry Area (3)",
 "id": "panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73",
 "overlays": [
  "this.overlay_D64046CF_E54E_BEF5_41B0_740F76800822"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -142.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -90.73,
   "panorama": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Lecture Hall",
 "id": "panorama_666EB882_6F0F_B496_41DB_B13485D51B63",
 "overlays": [
  "this.overlay_6FA00DA9_77D1_E375_41CA_90A39FD6F7F4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -72.41,
   "class": "AdjacentPanorama",
   "backwardYaw": -88.04,
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium ",
 "id": "panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
 "overlays": [
  "this.overlay_F1F8F3A0_E066_BF63_41B3_1DAEF3022572",
  "this.overlay_F184EBD4_E067_CF23_41E4_C1FA12437585"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pathology Museum",
 "id": "panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6",
 "overlays": [
  "this.overlay_C5B8906E_E4BC_D3A3_41E7_EE34AAE83E6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside right Labs  1st floor",
 "id": "panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
 "overlays": [
  "this.overlay_FF2C8319_E4A4_D560_41E1_52C064580E2B",
  "this.overlay_F873D86F_E4A4_B3A0_41E8_3A30678E6DDA",
  "this.overlay_F91BB45C_E4A7_D3E0_4192_7A207E94FD0F",
  "this.overlay_A535B7DA_E547_BEEC_41D8_98BF51D7FD55"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -156.88,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.59,
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "distance": 1
  },
  {
   "yaw": 106.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 152.52,
   "panorama": "this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153",
   "distance": 1
  },
  {
   "yaw": -132.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 113.96,
   "panorama": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
   "distance": 1
  },
  {
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_camera"
  }
 ],
 "id": "playList_EA23D4D6_E5D2_023D_41D5_EB07C19B5503",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 126.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F548A6C9_E5D2_0E17_41E1_CAD55A5180B0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 89.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F47DB969_E5D2_0216_41E0_81FAB16EF63E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Roundabout",
 "id": "panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
 "overlays": [
  "this.overlay_6696247C_77D0_61D3_41DC_55B01D5926C0",
  "this.overlay_66EFDC81_77D0_2132_41D3_8F8E16B2F866",
  "this.overlay_661E0219_77D0_2155_41D5_A183F6254D3F",
  "this.overlay_F6B67708_E45C_016C_41DF_6BA0A74FCACF",
  "this.overlay_F7545735_E45C_01A5_41E4_C89EC3E68F09",
  "this.overlay_F7958FBF_E454_00A5_41E2_396C6E00AC3A",
  "this.overlay_F1136FB9_E454_00AA_41DB_435D38C602A6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 99.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -85.89,
   "panorama": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B",
   "distance": 1
  },
  {
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -92.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -85.54,
   "panorama": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 3.15,
   "class": "AdjacentPanorama",
   "backwardYaw": 1.2,
   "panorama": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 25.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F5A6E686_E5D2_0E1A_41E6_97C2AE324D01",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 158.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F40F49C0_E5D2_0215_41CD_95E15127742E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643F1170_7752_D32D_417E_DEBF705E32D4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -73.92,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F453E92B_E5D2_026B_41E7_B69D761C7CCA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 87.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7444C06_E5D2_021A_41E7_3367C0397F54",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 42.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F442594C_E5D2_022E_41EC_9AA7DA835284",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -93.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4A33908_E5D2_0216_41E8_6470F0A80B73",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4C5B822_E5D2_021A_41EA_10CF3E00CF41",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Courtyard",
 "id": "panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
 "overlays": [
  "this.overlay_F2B18FF7_E070_12DD_41E2_6895811C5658",
  "this.overlay_F2B7B07B_E070_2DD5_41E5_F5CA47643F67",
  "this.overlay_EEDFACD4_E065_4923_41E6_41BBB5CC48AD",
  "this.overlay_EEB363A2_E065_DF67_41C7_5E832F49E2BF",
  "this.overlay_EEFC1441_E06B_B924_41E5_E6F9C39D1B28",
  "this.overlay_EF5D8EB7_E06D_C96D_41D5_E9222D954F38",
  "this.overlay_EFAD58E8_E06D_4AE3_41E5_75462F949D63",
  "this.overlay_EFA53932_E06F_4B67_41E0_1CFC78FE39FE",
  "this.overlay_F3792323_E06D_5F65_41E3_2C7411270431"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -160.89,
   "class": "AdjacentPanorama",
   "backwardYaw": -147.54,
   "panorama": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
   "distance": 1
  },
  {
   "yaw": -88.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -72.41,
   "panorama": "this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63",
   "distance": 1
  },
  {
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -27.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4F72841_E5D2_0216_41CF_DAFED62778E9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D_t.jpg",
 "class": "Panorama",
 "label": "Pharmacology Lab",
 "id": "panorama_643E2CC4_7752_5175_41D3_E6A830BADB2D",
 "hfovMax": 120,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -130.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F43F49EC_E5D2_05ED_41DF_38514B629DA1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_rotation"
},
{
 "items": [
  {
   "media": "this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_camera"
  }
 ],
 "id": "playList_EA2334D5_E5D2_023F_41D3_3BA6F8DCF3EE",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dentistry Area (2)",
 "id": "panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9",
 "overlays": [
  "this.overlay_DE353621_E57B_B1B2_41C0_6EB28E716138",
  "this.overlay_D1A2BCE8_E579_B2B2_41E3_31C618F0827E",
  "this.overlay_D04A27F1_E546_7E93_41E1_CF520C51DB71",
  "this.overlay_D7F98EE6_E546_6EB0_41E1_3CB470A2229B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -174.61,
   "class": "AdjacentPanorama",
   "backwardYaw": 100.48,
   "panorama": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Front Lobby",
 "id": "panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
 "overlays": [
  "this.overlay_6C870B69_77F0_27F5_41CC_94D4D7AC2182",
  "this.overlay_6EF241F7_77F0_62DD_41D5_AE993828581E",
  "this.overlay_6E4F7E9A_77F0_2157_41D8_B4A370E6614D",
  "this.overlay_6E1607F8_77F0_6ED3_41DB_5F175A992ADE",
  "this.overlay_6E6E94E4_77F0_22F3_41C4_8AD6B4BF0CB2",
  "this.overlay_6E0A9C61_77F0_21F5_41D8_BB6B4BDBD9A0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.38,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.41,
   "panorama": "this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE",
   "distance": 1
  },
  {
   "yaw": 1.2,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.15,
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "distance": 1
  },
  {
   "yaw": -89.51,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.22,
   "panorama": "this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E",
   "distance": 1
  },
  {
   "panorama": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_t.jpg",
 "class": "Panorama",
 "label": "1st FLoor Library Hallway",
 "id": "panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -92.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7E86AD5_E5D2_063F_41C3_99FFEF80EECF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 4.25,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 4.25,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 4.25,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Disection Hall",
 "id": "panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01",
 "overlays": [
  "this.overlay_FC827A35_E4CC_03B3_41B5_3B9A66A8D06C",
  "this.overlay_FC807276_E4CC_03B0_41E8_0C94EA2FB31F"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -46.14,
   "class": "AdjacentPanorama",
   "backwardYaw": -178.68,
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "distance": 1
  },
  {
   "yaw": -137.67,
   "class": "AdjacentPanorama",
   "backwardYaw": -53.11,
   "panorama": "this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "label": "Main High Aerial ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Courtyard",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Cricket Ground",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Basketball Court",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Library ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Cafeteria ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "GYM",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Mosque",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Auditorium ",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Computer Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Lecture Hall",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Conference Room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Cafeteria High Aerial",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Book Store",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Mart",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Admin",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Roundabout",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Girls Hostel",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Girls Hostel room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Court Room",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Front Lobby",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "1st FLoor Library Hallway",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Bio Chem Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Centre lobby 2nd floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "Community Medicine & Forensic Medicine Museum 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "Community Medicine",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Disection Hall",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Skill lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "Anatomy museum",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "Female Hostel Lobby",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "Lecture Hall 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "Library 1st Floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "Murtury",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "Outside left balcony corridoor 1st floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Outside left Labs  1st floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "label": "Outside left Labs  2nd floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "label": "Outside left Labs on GF",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "label": "Outside right Labs  2nd floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "label": "Outside right Labs  1st floor",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "label": "Outside right Labs on GF 2",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "label": "Outside right Labs on GF",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "label": "Pathology Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "label": "Pathology Museum",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "label": "Pharmacology Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "label": "Physiology Lab",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "label": "Dental college 1st Floor Hallway",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "label": "Dental College Aerial",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "label": "Dental College Hallway",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "label": "Dental Lobby",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "label": "Dentistry Area (2)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "label": "Dentistry Area (3)",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "label": "Dentistry Area",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  }
 ],
 "label": "Media",
 "class": "Menu",
 "id": "Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "initialPosition": {
  "yaw": 129.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F5872625_E5D2_0E1E_41E6_2B8C0BD59360",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dental College Aerial",
 "hfovMin": "165%",
 "id": "panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
 "overlays": [
  "this.overlay_CE20F906_E54A_D379_41D0_78EC7E39207C",
  "this.overlay_C90868C1_E54B_D2FB_41EB_5A4B08E48463",
  "this.overlay_C91ACF04_E54A_6F79_41E1_4D50FF13D47E",
  "this.overlay_C8B54BCD_E54A_D68B_41D5_9CA2E0BBA163"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_t.jpg",
 "class": "Panorama",
 "hfovMax": 134
},
{
 "initialPosition": {
  "yaw": -70.21,
  "class": "PanoramaCameraPosition",
  "pitch": -3.33
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -107.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F512C751_E5D2_0E37_41D8_399A04795097",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside left Labs  1st floor",
 "id": "panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
 "overlays": [
  "this.overlay_F49B65F2_E46F_5CA6_41BC_0921CF8FB0DF",
  "this.overlay_F557C5AC_E46C_BCA2_41D2_8FEE79BAA8A1",
  "this.overlay_F666751D_E46D_5D62_41DB_769A9B64A822",
  "this.overlay_F6581F62_E46C_CDA1_41AF_C0C68F3662E0",
  "this.overlay_F7EC7958_E46B_B5E1_41C7_35A60A8D80BC",
  "this.overlay_F76C9CED_E465_4CA3_41DF_2894742FF96A",
  "this.overlay_DB7EB643_E54A_D1E3_418C_C687494B4E13"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -156.88,
   "panorama": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
   "distance": 1
  },
  {
   "panorama": "this.panorama_643FE779_7752_FF1F_41A7_1896F5CE751F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -84.06,
   "class": "AdjacentPanorama",
   "backwardYaw": -22.65,
   "panorama": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -178.68,
   "class": "AdjacentPanorama",
   "backwardYaw": -46.14,
   "panorama": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01",
   "distance": 1
  },
  {
   "yaw": -7.56,
   "class": "AdjacentPanorama",
   "backwardYaw": -176.55,
   "panorama": "this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 75.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F54556E1_E5D2_0E17_41E3_0ED68F44BDB4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bio Chem Lab",
 "id": "panorama_EC169295_E3B4_0190_41BF_38E86C52F94D",
 "overlays": [
  "this.overlay_F2391E35_E4BC_03BD_41E4_2B0DAC715CDA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 49.91,
   "class": "AdjacentPanorama",
   "backwardYaw": -154.23,
   "panorama": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 94.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F6D0ECB7_E5D2_027B_41E1_6208C5D10D3D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -3.37,
  "hfov": 63,
  "class": "PanoramaCameraPosition",
  "pitch": -3.94
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Girls Hostel",
 "id": "panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
 "overlays": [
  "this.overlay_609A09E2_77D0_22F7_41B5_264D87FC301C",
  "this.overlay_F2FB4CBF_E06A_C95D_41EA_C6D395D83C67"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "items": [
  {
   "media": "this.panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_camera"
  }
 ],
 "id": "playList_EA2354D2_E5D2_0235_41E8_E6A1BF4808FE",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Anatomy museum",
 "id": "panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342",
 "overlays": [
  "this.overlay_FDBB81E1_E4D4_00D0_41EA_BBB27AEEA5C4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -176.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -7.56,
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3_camera"
  }
 ],
 "id": "playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 5.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7BA8B72_E5D2_06F5_41E8_BC9ED16766C3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside left Labs  2nd floor",
 "id": "panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
 "overlays": [
  "this.overlay_F09DD2DA_E45B_54E1_41E4_6592E756D62E",
  "this.overlay_F1AF6243_E45B_57E7_41D5_71F60C9CE5D4",
  "this.overlay_F2BE3BE5_E45D_D4A3_41D1_E28E601B75D5",
  "this.overlay_F2EEF17D_E45F_55A3_41EA_F884373AE60E",
  "this.overlay_F2ED19F4_E45C_D4A1_41AB_E9B4693491F7",
  "this.overlay_F3278474_E4A4_F3A1_41D1_CF9F6DE73CE9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -32,
   "class": "AdjacentPanorama",
   "backwardYaw": -172.36,
   "panorama": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "distance": 1
  },
  {
   "yaw": -50.17,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.3,
   "panorama": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
   "distance": 1
  },
  {
   "yaw": 31.67,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.67,
   "panorama": "this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45",
   "distance": 1
  },
  {
   "yaw": -132.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 86.84,
   "panorama": "this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 4.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7544BE8_E5D2_0615_41E5_65444C0EC9EF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 17.41,
  "class": "PanoramaCameraPosition",
  "pitch": 3.4
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 37.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F41CE9A5_E5D2_021F_41BD_B635EB2A6619",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Court Room",
 "id": "panorama_643FE779_7752_FF1F_41A7_1896F5CE751F",
 "overlays": [
  "this.overlay_F2FB275D_E065_47DC_41DE_19200FD57743"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 176.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4B3E8E8_E5D2_0216_41EB_2D296C9222BD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -66.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4E69875_E5D2_02FE_41EA_22F56B1A862D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dental Lobby",
 "id": "panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B",
 "overlays": [
  "this.overlay_C85801DF_E54B_D286_41C5_28DE08A5E88D",
  "this.overlay_D55038B7_E579_B29A_41E0_2101DCA30428"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 90.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7668C33_E5D2_027A_41C3_449CA3A3C071",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Physiology Lab",
 "id": "panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3",
 "overlays": [
  "this.overlay_C69693CA_E4BB_54E3_41DA_1F971D0BA352"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4CAF807_E5D2_021B_41D3_B97BED0A9769",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 32.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F6F34CF2_E5D2_03FA_41E9_3777AEB2888F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dental college 1st Floor Hallway",
 "id": "panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075",
 "overlays": [
  "this.overlay_C8437EAD_E549_AE8B_41E5_B69D2FDF78BB",
  "this.overlay_CBB17017_E546_5186_41E2_110BBAE740EA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 100.48,
   "class": "AdjacentPanorama",
   "backwardYaw": -174.61,
   "panorama": "this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9",
   "distance": 1
  },
  {
   "panorama": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_camera"
  }
 ],
 "id": "playList_EA2264C8_E5D2_0215_41E4_D0E627A24676",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Admin",
 "id": "panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
 "overlays": [
  "this.overlay_78D3D4EB_77D0_62F5_41DD_B5809703F241",
  "this.overlay_C6F49A1B_E4A5_D760_41D8_19E4624474A8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 62.06,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.73,
   "panorama": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -175.37,
  "class": "PanoramaCameraPosition",
  "pitch": -4.09
 },
 "manualRotationSpeed": 1580,
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pathology Lab",
 "id": "panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153",
 "overlays": [
  "this.overlay_C4620CD0_E4BD_CCFF_41E9_4679EF850619"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 152.52,
   "class": "AdjacentPanorama",
   "backwardYaw": 106.08,
   "panorama": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Murtury",
 "id": "panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4",
 "overlays": [
  "this.overlay_F8F8C95D_E4FC_01FA_41EA_77FDD0A3CC49"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -53.11,
   "class": "AdjacentPanorama",
   "backwardYaw": -137.67,
   "panorama": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 91.54,
  "class": "PanoramaCameraPosition",
  "pitch": -3.36
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643EB254_7753_D115_41CA_DB8B6383D373_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -71.57,
  "class": "PanoramaCameraPosition",
  "pitch": 3.13
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.95,
  "class": "PanoramaCameraPosition",
  "pitch": -0.81
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 172.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7162C4D_E5D2_022F_41E2_097224E958C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_t.jpg",
 "class": "Panorama",
 "label": "Female Hostel Lobby",
 "id": "panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 19.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7F80AA7_E5D2_061B_41E6_F5D1B080F4E8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cafeteria ",
 "id": "panorama_643FC1CF_7752_5373_41D4_292811B701BB",
 "overlays": [
  "this.overlay_6E83BBE4_7836_5CDC_41DA_BC944E5CA924",
  "this.overlay_F144B246_E07B_D92F_41E9_B3C4F8DF18F8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Library ",
 "id": "panorama_643EB254_7753_D115_41CA_DB8B6383D373",
 "overlays": [
  "this.overlay_F133356E_E07F_DBFC_41E9_9ABA7B2891A7",
  "this.overlay_F15641BB_E07E_BB64_41E6_6FEC7A5AACE9",
  "this.overlay_F1581E84_E07D_4923_41D7_8903AC5A4F99"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Library 1st Floor",
 "id": "panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C",
 "overlays": [
  "this.overlay_F82B775B_E4FC_01FE_41E0_F63449D44383"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 37.99,
   "class": "AdjacentPanorama",
   "backwardYaw": 155.48,
   "panorama": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_camera"
  }
 ],
 "id": "playList_F0AFF40B_E5D2_022B_41D5_0E6539A6A94D",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Book Store",
 "id": "panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D",
 "overlays": [
  "this.overlay_60873F69_6F32_7AA0_41D6_255AAA1C2CDE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside right Labs  2nd floor",
 "id": "panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
 "overlays": [
  "this.overlay_FD932508_E4AC_DD60_419F_F91470695057",
  "this.overlay_FE070A67_E4AC_B7A0_41EA_4C1A198563D5",
  "this.overlay_FE6FB507_E4AD_7D60_41E1_24FFBF172407",
  "this.overlay_FFB750D8_E4AB_54E0_41A7_588DC8C2FB2D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 91.3,
   "class": "AdjacentPanorama",
   "backwardYaw": -50.17,
   "panorama": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "distance": 1
  },
  {
   "yaw": 72.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -56.12,
   "panorama": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "distance": 1
  },
  {
   "panorama": "this.panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 113.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.52,
   "panorama": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_t.jpg",
 "class": "Panorama",
 "label": "Lecture Hall 2",
 "id": "panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -142.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F78AEB43_E5D2_061B_41E0_2309E5C50069",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dental College Hallway",
 "id": "panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
 "overlays": [
  "this.overlay_CAD8D97D_E546_538B_41DB_957330ECF614",
  "this.overlay_CA4062CA_E57A_D68B_41EA_75EFEEC281A7",
  "this.overlay_D1C7421C_E54A_B19B_41E6_B24833AD08A8",
  "this.overlay_D1772A09_E546_D17B_41D0_448C0F7F4012"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -90.73,
   "class": "AdjacentPanorama",
   "backwardYaw": -142.28,
   "panorama": "this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73",
   "distance": 1
  },
  {
   "yaw": -13.96,
   "class": "AdjacentPanorama",
   "backwardYaw": -21.39,
   "panorama": "this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_camera"
  }
 ],
 "id": "playList_EA22C4CA_E5D2_0215_41DD_694A01EC11E7",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Skill lab",
 "id": "panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45",
 "overlays": [
  "this.overlay_FD2D37E8_E4D4_00D0_41E1_DA3D57DD00AB"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -3.67,
   "class": "AdjacentPanorama",
   "backwardYaw": 31.67,
   "panorama": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cafeteria High Aerial",
 "id": "panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
 "overlays": [
  "this.overlay_6844964E_783E_D7EC_41C0_33EEA60F9A5F",
  "this.overlay_68869354_783F_CDFC_41C8_BD4628060470",
  "this.overlay_684AD03A_783E_4BB5_41D3_4DAECADAC49A",
  "this.overlay_F26CA89C_E06B_C923_41C9_7E661F0E3089",
  "this.overlay_D3E22E59_E55A_5199_41C0_400CB0643637",
  "this.overlay_DCF88FCC_E55A_AEFE_41D9_DDAB70857DFD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -79.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7744C1D_E5D2_022E_41E1_F2D54EBE8F0B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Basketball Court",
 "id": "panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
 "overlays": [
  "this.overlay_F0BE30AC_E07A_B963_41E1_A0EDEBF5ED83",
  "this.overlay_F13522D5_E07D_592C_41B9_9B4BE2C9E3EC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -147.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -160.89,
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside Ceo Office",
 "id": "panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E",
 "overlays": [
  "this.overlay_7914C5D1_77D0_22D5_41D6_091745E8979B",
  "this.overlay_78573511_77D0_2355_41BB_3EA4E54D3C86",
  "this.overlay_781ABA33_77D1_E156_41AE_5C7612A7C5CD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -46.22,
   "class": "AdjacentPanorama",
   "backwardYaw": -89.51,
   "panorama": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": -178.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F6C0ECDA_E5D2_0235_41D3_A5B5A1A48850",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 7.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F49118A1_E5D2_0216_41A4_BC8075F3B3A5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975_camera"
  },
  {
   "media": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4_camera"
  },
  {
   "media": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_camera"
  },
  {
   "media": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_camera"
  },
  {
   "media": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373_camera"
  },
  {
   "media": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB_camera"
  },
  {
   "media": "this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_camera"
  },
  {
   "media": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_camera"
  },
  {
   "media": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_camera"
  },
  {
   "media": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_camera"
  },
  {
   "media": "this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63_camera"
  },
  {
   "media": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_camera"
  },
  {
   "media": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_camera"
  },
  {
   "media": "this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_camera"
  },
  {
   "media": "this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_camera"
  },
  {
   "media": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_camera"
  },
  {
   "media": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_camera"
  },
  {
   "media": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_camera"
  },
  {
   "media": "this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_camera"
  },
  {
   "media": "this.panorama_643FE779_7752_FF1F_41A7_1896F5CE751F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_camera"
  },
  {
   "media": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_camera"
  },
  {
   "media": "this.panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_camera"
  },
  {
   "media": "this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_camera"
  },
  {
   "media": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_camera"
  },
  {
   "media": "this.panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_camera"
  },
  {
   "media": "this.panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_camera"
  },
  {
   "media": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_camera"
  },
  {
   "media": "this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_camera"
  },
  {
   "media": "this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_camera"
  },
  {
   "media": "this.panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_camera"
  },
  {
   "media": "this.panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_camera"
  },
  {
   "media": "this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_camera"
  },
  {
   "media": "this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_camera"
  },
  {
   "media": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_camera"
  },
  {
   "media": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_camera"
  },
  {
   "media": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_camera"
  },
  {
   "media": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_camera"
  },
  {
   "media": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_camera"
  },
  {
   "media": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_camera"
  },
  {
   "media": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_camera"
  },
  {
   "media": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_camera"
  },
  {
   "media": "this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_camera"
  },
  {
   "media": "this.panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_camera"
  },
  {
   "media": "this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_camera"
  },
  {
   "media": "this.panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_camera"
  },
  {
   "media": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_camera"
  },
  {
   "media": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_camera"
  },
  {
   "media": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_camera"
  },
  {
   "media": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_camera"
  },
  {
   "media": "this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_camera"
  },
  {
   "media": "this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_camera"
  },
  {
   "media": "this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 51, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Main High Aerial ",
 "hfovMin": "151%",
 "id": "panorama_643E9203_7753_D0F3_41D1_C2233142A975",
 "overlays": [
  "this.overlay_F198D81C_E05F_FD53_41BB_A2664A01A527",
  "this.overlay_F1F91F12_E050_1354_41D9_DA9809572556",
  "this.overlay_F2AC0938_E050_FF54_41D1_4B6C7024823C",
  "this.overlay_F391E344_E050_133C_41E2_03457150295B",
  "this.overlay_F292A6BF_E070_F54D_41DA_003D95E31E6B",
  "this.overlay_C836DA47_E5BA_F186_41E9_A1C4C7C3C895",
  "this.overlay_C2D05AB1_E5BE_569B_41E5_AE8A5F692797",
  "this.overlay_CC57F44C_E547_D189_41AB_0C48847FCB4A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_t.jpg",
 "class": "Panorama",
 "hfovMax": 121
},
{
 "initialPosition": {
  "yaw": 69.02,
  "class": "PanoramaCameraPosition",
  "pitch": -0.47
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 107.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F6E30D05_E5D2_021E_41D6_F561900008F9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Female Hostel Lobby",
 "id": "panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55",
 "overlays": [
  "this.overlay_60360F83_77F0_3F35_41A6_BCD95F0A9E83",
  "this.overlay_F9259D44_E0A7_CB23_41C8_EB8E6F2AF47D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Auditorium",
 "id": "panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5",
 "overlays": [
  "this.overlay_6269E14D_77D0_23CD_41D8_87DEFF93CEC8",
  "this.overlay_F92E9329_E0A6_BF65_41E1_D74EE04633FF"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside Mart",
 "id": "panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
 "overlays": [
  "this.overlay_6363813C_6F36_46A1_41C2_4AE5D38ECA95",
  "this.overlay_63661660_6F36_4AA1_41D5_7262BA71AAC1",
  "this.overlay_61F287AB_6F31_C9A0_41D0_E035D81069EC",
  "this.overlay_61B99997_6F36_C660_41DA_BBB1C8A075C0",
  "this.overlay_FB0D702F_E0AD_797D_41C1_F06E21552CED",
  "this.overlay_FEA8CF2C_E0AE_C77C_41DE_95A8BAC018D9"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Community Medicine",
 "id": "panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4",
 "overlays": [
  "this.overlay_F3A21B8F_E4CC_0150_41C8_24A9D18D4F10"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Centre lobby 2nd floor",
 "id": "panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
 "overlays": [
  "this.overlay_F2CEF7E8_E4B4_00D2_41EB_0A0E434CD034",
  "this.overlay_F2C1E9A2_E4B4_0156_41A8_C8BD475EA7A1"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -56.12,
   "class": "AdjacentPanorama",
   "backwardYaw": 72.34,
   "panorama": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
   "distance": 1
  },
  {
   "yaw": -172.36,
   "class": "AdjacentPanorama",
   "backwardYaw": -32,
   "panorama": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_camera"
  }
 ],
 "id": "playList_EA2004DC_E5D2_022D_41A0_A295948928EA",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EB882_6F0F_B496_41DB_B13485D51B63_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 95.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7987B0F_E5D2_062B_419B_AF057A7F5384",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 166.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F46C1988_E5D2_0216_41D2_B7571776796E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Mosque",
 "id": "panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
 "overlays": [
  "this.overlay_F19C4F57_E065_C72D_41CD_B4C7EE753725"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticRotationSpeed": 4,
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643E9203_7753_D0F3_41D1_C2233142A975_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out"
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside Gym",
 "id": "panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D",
 "overlays": [
  "this.overlay_7E57C276_6F52_CAA1_41D4_FD1C6368B9EA",
  "this.overlay_7F22C471_6F56_4EA0_41CD_E15423EC56DB",
  "this.overlay_7EFB3AA8_6F56_3BA0_41CF_98D0133C488D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975_camera"
  },
  {
   "media": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4_camera"
  },
  {
   "media": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_camera"
  },
  {
   "media": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_camera"
  },
  {
   "media": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373_camera"
  },
  {
   "media": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB_camera"
  },
  {
   "media": "this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_camera"
  },
  {
   "media": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_camera"
  },
  {
   "media": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_camera"
  },
  {
   "media": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_camera"
  },
  {
   "media": "this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63_camera"
  },
  {
   "media": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_camera"
  },
  {
   "media": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_camera"
  },
  {
   "media": "this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_camera"
  },
  {
   "media": "this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_camera"
  },
  {
   "media": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_camera"
  },
  {
   "media": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_camera"
  },
  {
   "media": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_camera"
  },
  {
   "media": "this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_camera"
  },
  {
   "media": "this.panorama_643FE779_7752_FF1F_41A7_1896F5CE751F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_camera"
  },
  {
   "media": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_camera"
  },
  {
   "media": "this.panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F068B9C3_E3B4_03F7_41D2_D2827C556DEB_camera"
  },
  {
   "media": "this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_camera"
  },
  {
   "media": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_camera"
  },
  {
   "media": "this.panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_camera"
  },
  {
   "media": "this.panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_camera"
  },
  {
   "media": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_camera"
  },
  {
   "media": "this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_camera"
  },
  {
   "media": "this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_camera"
  },
  {
   "media": "this.panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC028BE5_E3B4_07B7_41DE_F5E42BD81CC4_camera"
  },
  {
   "media": "this.panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC0641FD_E3B4_0397_41E9_1BBF88C1BC82_camera"
  },
  {
   "media": "this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_camera"
  },
  {
   "media": "this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_camera"
  },
  {
   "media": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_camera"
  },
  {
   "media": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_camera"
  },
  {
   "media": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_camera"
  },
  {
   "media": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_camera"
  },
  {
   "media": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_camera"
  },
  {
   "media": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_camera"
  },
  {
   "media": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_camera"
  },
  {
   "media": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_camera"
  },
  {
   "media": "this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_camera"
  },
  {
   "media": "this.panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_camera"
  },
  {
   "media": "this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_camera"
  },
  {
   "media": "this.panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_camera"
  },
  {
   "media": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_camera"
  },
  {
   "media": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_camera"
  },
  {
   "media": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_camera"
  },
  {
   "media": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_camera"
  },
  {
   "media": "this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_camera"
  },
  {
   "media": "this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_camera"
  },
  {
   "media": "this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 165.76,
  "class": "PanoramaCameraPosition",
  "pitch": 2.03
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F5774702_E5D2_0E1A_41E4_94768A261328",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Computer Lab",
 "id": "panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400",
 "overlays": [
  "this.overlay_61E155D9_77D0_22D5_41D8_0CCEE182B96A",
  "this.overlay_74BE18C5_782E_3CDC_41A8_694D01199439"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 47.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F731EC76_E5D2_02FA_41E6_2017EEAC0F4D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -91.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7C93A7A_E5D2_06EA_41EA_32C6836A0A16",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Library 2",
 "id": "panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3",
 "overlays": [
  "this.overlay_649B0D85_7830_2332_4199_B512F01B4577",
  "this.overlay_F6D47A07_E09D_492C_41CF_298D28BE7554"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643EB254_7753_D115_41CA_DB8B6383D373",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Pharmacology Lab",
 "id": "panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D",
 "overlays": [
  "this.overlay_C5477B5E_E4BD_55E3_41C0_25322F8EE909"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 86.84,
   "class": "AdjacentPanorama",
   "backwardYaw": -132.48,
   "panorama": "this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_6439F50F_7752_30F2_41CF_4D61331475E3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside left balcony corridoor 1st floor",
 "id": "panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD",
 "overlays": [
  "this.overlay_F9C7E13E_E4FC_01B6_41E7_491D2D7978F7",
  "this.overlay_EA884DBB_E46B_CCA6_41AD_A439C1E733EF",
  "this.overlay_EB620D3F_E46B_4D9E_41E2_10CA961B0997"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -22.65,
   "class": "AdjacentPanorama",
   "backwardYaw": -84.06,
   "panorama": "this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438",
   "distance": 1
  },
  {
   "yaw": 155.48,
   "class": "AdjacentPanorama",
   "backwardYaw": 37.99,
   "panorama": "this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -80.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F42F6A1E_E5D2_062A_41E5_F91CAAE75D64",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F69D2D1D_E5D2_022E_41E2_8C63C23BBB47",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7B52B9F_E5D2_062A_41DA_821E8365ABC2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Mart",
 "id": "panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0",
 "overlays": [
  "this.overlay_F203A974_E06D_4BE3_41D3_EBE2ADD071AC"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cricket Ground",
 "id": "panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E",
 "overlays": [
  "this.overlay_F1342718_E065_C724_41C6_683FE8C5EC1B",
  "this.overlay_F0DC35B9_E065_5B65_41DB_1640D621DB29",
  "this.overlay_F0AAB8BE_E07A_C95F_41E0_F687F2989076"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Cafe (2)",
 "id": "panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95",
 "overlays": [
  "this.overlay_771B21D8_7836_4CF5_41D3_B4771DA2F6D6",
  "this.overlay_FBA43BF4_E0AB_4EEC_41AE_38DCA1354B3C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_643FC1CF_7752_5373_41D4_292811B701BB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 94.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F720CC94_E5D2_023E_41D5_8B4C5DCF0671",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -96.65,
  "class": "PanoramaCameraPosition",
  "pitch": 1.23
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Community Medicine & Forensic Medicine Museum 2",
 "id": "panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986",
 "overlays": [
  "this.overlay_F31BAC93_E4CC_0777_41D8_D2308C1A86F7"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "RLKU Aerial",
 "id": "panorama_6439F50F_7752_30F2_41CF_4D61331475E3",
 "overlays": [
  "this.overlay_7957E005_77CD_3049_41BE_D2C1477E0B28",
  "this.overlay_F8F69AB3_E09A_C965_41EA_94616ABD7FFF",
  "this.overlay_F873460F_E09B_B93D_41C9_76D2147F8C80",
  "this.overlay_F888CC9E_E09A_C95F_41D7_EEC6D9043660",
  "this.overlay_FAB3FCFC_E0A5_4AE3_41D0_BAFEA584D3BD",
  "this.overlay_C2276442_E54A_F1F9_41E9_A6EBA44DC429"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_643E9203_7753_D0F3_41D1_C2233142A975",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 47.48,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F5AB0668_E5D2_0E16_41D0_4C330D15ED9E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside right Labs on GF 2",
 "id": "panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9",
 "overlays": [
  "this.overlay_FAA769E4_E4A5_54A0_41EC_87C3B886D2DE",
  "this.overlay_FBBB3142_E4A4_D5E0_41E1_9C362AE822B0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.73,
   "class": "AdjacentPanorama",
   "backwardYaw": 62.06,
   "panorama": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
   "distance": 1
  },
  {
   "yaw": -175.71,
   "class": "AdjacentPanorama",
   "backwardYaw": 88.09,
   "panorama": "this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 148,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F50DE773_E5D2_0EFA_41AD_AE7B03828B9F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 1.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F55CA6A6_E5D2_0E1D_41E4_758753856FDC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 133.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F4DB37E7_E5D2_0E1B_41E4_D5AF7E31C3A4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside Admin",
 "id": "panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE",
 "overlays": [
  "this.overlay_7A975EAB_77D0_2175_41D2_418A48689C50",
  "this.overlay_7A25DC31_77D0_2155_41AD_7C150136EE3B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": -104.41,
   "class": "AdjacentPanorama",
   "backwardYaw": 91.38,
   "panorama": "this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_t.jpg",
 "class": "Panorama",
 "hfovMax": 120
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 157.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F52E77BB_E5D2_0E6A_41E0_B4AE7BA19D11",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Outside right Labs on GF",
 "id": "panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1",
 "overlays": [
  "this.overlay_FB2C7BD3_E4BB_F4E1_41C7_231A9969D09C",
  "this.overlay_C48E6CCA_E4BC_CCE0_41CE_78A5DEEF5220",
  "this.overlay_C7DF80D2_E5D9_B299_41B0_4F0C18C0A355",
  "this.overlay_C6CE6AE4_E5DB_B6B9_41CF_966809629076"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3",
   "class": "AdjacentPanorama"
  },
  {
   "yaw": 88.09,
   "class": "AdjacentPanorama",
   "backwardYaw": -175.71,
   "panorama": "this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9",
   "distance": 1
  },
  {
   "yaw": -85.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -92.22,
   "panorama": "this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -148.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7A5FBCB_E5D2_062B_41E8_D024BD4EBC20",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 23.12,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F53F4795_E5D2_0E3E_41DF_F878743AA229",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Dentistry Area",
 "id": "panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED",
 "overlays": [
  "this.overlay_D6C04018_E54F_D19C_41EA_D3F31AF750CE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -21.39,
   "class": "AdjacentPanorama",
   "backwardYaw": -13.96,
   "panorama": "this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424",
   "distance": 1
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_F5F2957B_E5D2_02E9_41DF_2807FF6CFB8B",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 71.25,
  "class": "PanoramaCameraPosition",
  "pitch": -1.57
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F48168C7_E5D2_021A_41D2_BA49A25957EF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 123.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F5BD7644_E5D2_0E1D_41DB_48FCDC2DFE40",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_643FC1CF_7752_5373_41D4_292811B701BB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 127,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -24.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F7010C5D_E5D2_0229_41E4_F69254A336AF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_camera"
  }
 ],
 "id": "playList_EA22F4CC_E5D2_022D_41E8_0F65A4525AC6",
 "class": "PlayList"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "height": "100%",
 "toolTipBackgroundColor": "#FFFFFF",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 0,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "13px",
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "width": 550,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": 34,
 "scrollBarVisible": "rollOver",
 "height": 140,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photo"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--LOCATION"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--REALTOR"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "right": "1.61%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "2.43%",
 "height": 58,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Segoe Print",
 "id": "Label_F5584FC2_E065_C724_41C7_D60D970FCD62",
 "width": "9.813%",
 "backgroundOpacity": 0,
 "right": "1.05%",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "Developed by:",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "4.4%",
 "height": "7.412%",
 "minWidth": 1,
 "fontSize": "1.8vmin",
 "borderSize": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "paddingTop": 0,
 "fontColor": "#000000",
 "class": "Label",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label26842"
 },
 "fontWeight": "bold"
},
{
 "maxHeight": 244,
 "maxWidth": 1020,
 "id": "Image_F4AF7829_E09D_4965_41D2_BBE1D6B83820",
 "width": "11.26%",
 "backgroundOpacity": 0,
 "right": "-0.03%",
 "paddingRight": 0,
 "url": "skin/Image_F4AF7829_E09D_4965_41D2_BBE1D6B83820.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "0%",
 "height": "7.959%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image27625"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit",
   "click": "this.setMediaBehaviour(this.playList_EA22F4CC_E5D2_022D_41E8_0F65A4525AC6, 0, this.panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EFBAF_6F0F_94EE_41D4_4C2C471C4BB9_0_HS_0_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.86,
   "yaw": 150.51
  }
 ],
 "id": "overlay_7EEE163D_6F51_CAA2_41AE_6B73424771F1",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Hostel Lobby",
   "click": "this.setMediaBehaviour(this.playList_F0AFF40B_E5D2_022B_41D5_0E6539A6A94D, 0, this.panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E900E_6F0F_93AE_41A7_6799B454DCA1_0_HS_0_0.png",
      "width": 380,
      "class": "ImageResourceLevel",
      "height": 365
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.08,
   "yaw": 50.24
  }
 ],
 "id": "overlay_7A1CA2C9_6FD1_CBE3_4181_AFB7C7EEB65C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.65,
   "yaw": -154.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC169295_E3B4_0190_41BF_38E86C52F94D, this.camera_F43F49EC_E5D2_05ED_41DF_38514B629DA1); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C249CC99_E4C6_B28A_41EB_1CFBAF06A893",
   "pitch": -6.53,
   "hfov": 12.65,
   "yaw": -154.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FCE48823_E4A7_53A0_41B2_37F00C03B09E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.84,
   "yaw": -85.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7, this.camera_F42F6A1E_E5D2_062A_41E5_F91CAAE75D64); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2485C9A_E4C6_B28E_41C3_1B8D4585CE82",
   "pitch": -11.11,
   "hfov": 11.84,
   "yaw": -85.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC5376C8_E4A7_DCE0_41DF_90EEBFF36161",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.01,
   "yaw": -112.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C248FC9A_E4C6_B28E_41DA_4CAF35E48198",
   "pitch": -6.69,
   "hfov": 6.01,
   "yaw": -112.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD8909FE_E4AB_B4A0_41E6_4D3FD70750F6",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.45,
   "yaw": 15.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit",
   "click": "this.setMediaBehaviour(this.playList_EA2334D5_E5D2_023F_41D3_3BA6F8DCF3EE, 0, this.panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F985AA3D_E4D4_03B7_41BE_394EF33FFEE3",
   "pitch": -0.8,
   "hfov": 4.45,
   "yaw": 15.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F18DD6F1_E06A_C6E4_41E9_88C22330F016",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.05,
   "yaw": -142.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424, this.camera_F47DB969_E5D2_0216_41E0_81FAB16EF63E); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A686DE57_E4B9_B1E7_41EB_306C5D9CCCED",
   "pitch": 9.95,
   "hfov": 15.05,
   "yaw": -142.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D64046CF_E54E_BEF5_41B0_740F76800822",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.startPanoramaWithCamera(this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4, this.camera_F69D2D1D_E5D2_022E_41E2_8C63C23BBB47); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EB882_6F0F_B496_41DB_B13485D51B63_0_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 252
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.24,
   "yaw": -72.41
  }
 ],
 "id": "overlay_6FA00DA9_77D1_E375_41CA_90A39FD6F7F4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.01,
   "yaw": 45.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98B8A3B_E4D4_03B3_41C3_1C5AB4C8C764",
   "pitch": -19.6,
   "hfov": 19.01,
   "yaw": 45.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1F8F3A0_E066_BF63_41B3_1DAEF3022572",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.08,
   "yaw": -133.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Stage",
   "click": "this.setMediaBehaviour(this.playList_EA2354D2_E5D2_0235_41E8_E6A1BF4808FE, 0, this.panorama_666EF97A_6F0C_B476_41CE_C18FE1589392)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9844A3C_E4D4_03B5_41E7_E37041250C45",
   "pitch": -13.93,
   "hfov": 14.08,
   "yaw": -133.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F184EBD4_E067_CF23_41E4_C1FA12437585",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.47,
   "yaw": -177.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24ECCA3_E4C6_B2BE_41E0_07E2E4149BE7",
   "pitch": -0.55,
   "hfov": 10.47,
   "yaw": -177.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C5B8906E_E4BC_D3A3_41E7_EE34AAE83E6A",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.54,
   "yaw": 106.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153, this.camera_F4F72841_E5D2_0216_41CF_DAFED62778E9); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24D3C9E_E4C6_B286_41BD_F9CBBAA2FBF3",
   "pitch": -5.35,
   "hfov": 13.54,
   "yaw": 106.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF2C8319_E4A4_D560_41E1_52C064580E2B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.09,
   "yaw": -156.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438, this.camera_F4C5B822_E5D2_021A_41EA_10CF3E00CF41); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24D8C9F_E4C6_B286_41B9_246B7B0002BC",
   "pitch": -13.2,
   "hfov": 10.09,
   "yaw": -156.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F873D86F_E4A4_B3A0_41E8_3A30678E6DDA",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -132.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_2_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.25,
   "yaw": -132.51
  }
 ],
 "id": "overlay_F91BB45C_E4A7_D3E0_4192_7A207E94FD0F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -132.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31, this.camera_F4E69875_E5D2_02FE_41EA_22F56B1A862D); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A681CE52_E4B9_B1FE_41C1_BD404D9AF26A",
   "pitch": 1.73,
   "hfov": 6.05,
   "yaw": -132.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A535B7DA_E547_BEEC_41D8_98BF51D7FD55",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.07,
   "yaw": 2.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_0_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.27,
   "yaw": 2.86
  }
 ],
 "id": "overlay_6696247C_77D0_61D3_41DC_55B01D5926C0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.21,
   "yaw": 3.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_1_0_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD, this.camera_F6C0ECDA_E5D2_0235_41D3_A5B5A1A48850); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_1_0.png",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 23
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.14,
   "yaw": 3.15
  }
 ],
 "id": "overlay_66EFDC81_77D0_2132_41D3_8F8E16B2F866",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": -178.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_2_0.png",
      "width": 126,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.94,
   "yaw": -178.7
  }
 ],
 "id": "overlay_661E0219_77D0_2155_41D5_A183F6254D3F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.57,
   "yaw": 99.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B, this.camera_F720CC94_E5D2_023E_41D5_8B4C5DCF0671); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F99D0A48_E4D4_03DD_41DC_0DA3E1CEB09C",
   "pitch": -8.31,
   "hfov": 14.57,
   "yaw": 99.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6B67708_E45C_016C_41DF_6BA0A74FCACF",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.96,
   "yaw": -92.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1, this.camera_F6D0ECB7_E5D2_027B_41E1_6208C5D10D3D); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F99DBA48_E4D4_03DD_41EB_3D33D3EAD60C",
   "pitch": -8.55,
   "hfov": 13.96,
   "yaw": -92.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7545735_E45C_01A5_41E4_C89EC3E68F09",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.35,
   "yaw": 134.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F99E5A48_E4D4_03DD_41D6_FD90A990EDE6",
   "pitch": -0.19,
   "hfov": 7.35,
   "yaw": 134.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7958FBF_E454_00A5_41E2_396C6E00AC3A",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.69,
   "yaw": 135.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_6_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_6_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.59,
   "hfov": 6.69,
   "yaw": 135.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F1136FB9_E454_00AA_41DB_435D38C602A6",
 "data": {
  "label": "Upstairs"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.36,
   "yaw": -169.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_6_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98C2A2F_E4D4_0353_41DD_F6AEEE794710",
   "pitch": -8.85,
   "hfov": 5.36,
   "yaw": -169.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2B18FF7_E070_12DD_41E2_6895811C5658",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.36,
   "yaw": 167.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_7_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_7_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.73,
   "hfov": 9.36,
   "yaw": 167.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F2B7B07B_E070_2DD5_41E5_F5CA47643F67",
 "data": {
  "label": "Auditorium"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": -0.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Front Lobby",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98CAA30_E4D4_034D_4169_52CA1009DE68",
   "pitch": -15.42,
   "hfov": 11.55,
   "yaw": -0.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EEDFACD4_E065_4923_41E6_41BBB5CC48AD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": -88.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Lecture Hall",
   "click": "this.startPanoramaWithCamera(this.panorama_666EB882_6F0F_B496_41DB_B13485D51B63, this.camera_F6E30D05_E5D2_021E_41D6_F561900008F9); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98D2A31_E4D4_034F_41CF_CEA720BBC7C0",
   "pitch": -7.43,
   "hfov": 5.91,
   "yaw": -88.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EEB363A2_E065_DF67_41C7_5E832F49E2BF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -168.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_10_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_10_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.54,
   "hfov": 9.37,
   "yaw": -168.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_EEFC1441_E06B_B924_41E5_E6F9C39D1B28",
 "data": {
  "label": "Auditorium"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.86,
   "yaw": 116.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Computer Lab",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98DAA32_E4D4_034D_419F_47C516C6A8C9",
   "pitch": -5.48,
   "hfov": 4.86,
   "yaw": 116.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EF5D8EB7_E06D_C96D_41D5_E9222D954F38",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.86,
   "yaw": 121.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Computer Lab",
   "click": "this.mainPlayList.set('selectedIndex', 9); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98E7A32_E4D4_034D_41E8_D7CBC937769D",
   "pitch": -5.58,
   "hfov": 4.86,
   "yaw": 121.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EFAD58E8_E06D_4AE3_41E5_75462F949D63",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.2,
   "yaw": 167.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_13_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter Auditorium",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98EEA32_E4D4_034D_41D0_80084EC693F4",
   "pitch": -8.62,
   "hfov": 4.2,
   "yaw": 167.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EFA53932_E06F_4B67_41E0_1CFC78FE39FE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.2,
   "yaw": -160.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_14_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To basketball Court",
   "click": "this.startPanoramaWithCamera(this.panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE, this.camera_F6F34CF2_E5D2_03FA_41E9_3777AEB2888F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_14_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 88
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.2,
   "yaw": -160.89
  }
 ],
 "id": "overlay_F3792323_E06D_5F65_41E3_2C7411270431",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_4_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0
  },
  {
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_5_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 90,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_00000.png",
      "width": 1892,
      "class": "ImageResourceLevel",
      "height": 1892
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "yaw": 0
  },
  {
   "yaw": 90,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_00001.png",
      "width": 1892,
      "class": "ImageResourceLevel",
      "height": 1892
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayImage"
  },
  {
   "yaw": -180,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_00002.png",
      "width": 1892,
      "class": "ImageResourceLevel",
      "height": 1892
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayImage"
  },
  {
   "yaw": -90,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_00003.png",
      "width": 1892,
      "class": "ImageResourceLevel",
      "height": 1892
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayImage"
  },
  {
   "yaw": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_0_00004.png",
      "width": 1892,
      "class": "ImageResourceLevel",
      "height": 1892
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_DE353621_E57B_B1B2_41C0_6EB28E716138",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.04,
   "yaw": 169.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_1_1_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 57.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.04,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_1_0.png",
      "width": 632,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 57.91,
   "yaw": 169.02
  }
 ],
 "id": "overlay_D1A2BCE8_E579_B2B2_41E3_31C618F0827E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 89.03,
   "yaw": -174.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_2_1_6_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 54.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 89.03,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_2_0.png",
      "width": 2047,
      "class": "ImageResourceLevel",
      "height": 1466
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 54.82,
   "yaw": -174.17
  }
 ],
 "id": "overlay_D04A27F1_E546_7E93_41E1_CF520C51DB71",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.51,
   "yaw": -174.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_3_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075, this.camera_F7744C1D_E5D2_022E_41E1_F2D54EBE8F0B); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A686FE57_E4B9_B1E7_41D5_2BF63EC26C41",
   "pitch": -2.03,
   "hfov": 19.51,
   "yaw": -174.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D7F98EE6_E546_6EB0_41E1_3CB470A2229B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7, this.camera_F5774702_E5D2_0E1A_41E4_94768A261328); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_0_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "yaw": 1.2
  }
 ],
 "id": "overlay_6C870B69_77F0_27F5_41CC_94D4D7AC2182",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE, this.camera_F54556E1_E5D2_0E17_41E3_0ED68F44BDB4); this.setMediaBehaviour(this.playList_EA2004DC_E5D2_022D_41A0_A295948928EA, 0, this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_1_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22,
   "yaw": 91.38
  }
 ],
 "id": "overlay_6EF241F7_77F0_62DD_41D5_AE993828581E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Admin Office",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_2_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82,
   "yaw": 87.19
  }
 ],
 "id": "overlay_6E4F7E9A_77F0_2157_41D8_B4A370E6614D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E, this.camera_F560E72E_E5D2_0E6D_41AE_57CF3B976463); this.setMediaBehaviour(this.playList_EA2334D5_E5D2_023F_41D3_3BA6F8DCF3EE, 0, this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_3_0.png",
      "width": 174,
      "class": "ImageResourceLevel",
      "height": 68
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.86,
   "yaw": -89.51
  }
 ],
 "id": "overlay_6E1607F8_77F0_6ED3_41DB_5F175A992ADE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Conference Room",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_4_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 112
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.07,
   "yaw": -80.61
  }
 ],
 "id": "overlay_6E6E94E4_77F0_22F3_41C4_8AD6B4BF0CB2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD_0_HS_5_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.42,
   "yaw": -179.16
  }
 ],
 "id": "overlay_6E0A9C61_77F0_21F5_41D8_BB6B4BDBD9A0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.28,
   "yaw": -46.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438, this.camera_F55CA6A6_E5D2_0E1D_41E4_758753856FDC); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F996CA4F_E4D4_03D3_41E3_25862F39297A",
   "pitch": -1.98,
   "hfov": 8.28,
   "yaw": -46.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC827A35_E4CC_03B3_41B5_3B9A66A8D06C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.73,
   "yaw": -137.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4, this.camera_F548A6C9_E5D2_0E17_41E1_CAD55A5180B0); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9977A4F_E4D4_03D3_41EB_FE7C0D15E8D1",
   "pitch": -2.2,
   "hfov": 9.73,
   "yaw": -137.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC807276_E4CC_03B0_41E8_0C94EA2FB31F",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.83,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6807E54_E4B9_B1FA_41CF_7307AA143A4C",
   "pitch": -6.91,
   "hfov": 5.83,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CE20F906_E54A_D379_41D0_78EC7E39207C",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.83,
   "yaw": -40.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_1_0.png",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.21,
   "yaw": -40.03
  }
 ],
 "id": "overlay_C90868C1_E54B_D2FB_41EB_5A4B08E48463",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.14,
   "yaw": -20.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_2_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.93,
   "yaw": -20.12
  }
 ],
 "id": "overlay_C91ACF04_E54A_6F79_41E1_4D50FF13D47E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.8,
   "yaw": 113,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_3_0.png",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 153
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.98,
   "yaw": 113
  }
 ],
 "id": "overlay_C8B54BCD_E54A_D68B_41D5_9CA2E0BBA163",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.78,
   "yaw": -7.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342, this.camera_F4CAF807_E5D2_021B_41D3_B97BED0A9769); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2546C92_E4C6_B29E_41E6_5C834E47AB8A",
   "pitch": -4.42,
   "hfov": 23.78,
   "yaw": -7.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F49B65F2_E46F_5CA6_41BC_0921CF8FB0DF",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.13,
   "yaw": -178.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01, this.camera_F4DB37E7_E5D2_0E1B_41E4_D5AF7E31C3A4); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2548C93_E4C6_B29E_41C7_F43ECE39A009",
   "pitch": -4.26,
   "hfov": 14.13,
   "yaw": -178.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F557C5AC_E46C_BCA2_41D2_8FEE79BAA8A1",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.89,
   "yaw": -84.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD, this.camera_F52E77BB_E5D2_0E6A_41E0_B4AE7BA19D11); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2571C93_E4C6_B29E_41E4_F34ABEAFF8C1",
   "pitch": -6.89,
   "hfov": 13.89,
   "yaw": -84.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F666751D_E46D_5D62_41DB_769A9B64A822",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.99,
   "yaw": -74.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2578C94_E4C6_B29A_41C3_C03F850D89F5",
   "pitch": -1.38,
   "hfov": 8.99,
   "yaw": -74.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6581F62_E46C_CDA1_41AF_C0C68F3662E0",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.46,
   "yaw": 87.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7, this.camera_F53F4795_E5D2_0E3E_41DF_F878743AA229); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2567C94_E4C6_B29A_41D5_4D9D5F064909",
   "pitch": -12,
   "hfov": 17.46,
   "yaw": 87.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F7EC7958_E46B_B5E1_41C7_35A60A8D80BC",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.42,
   "yaw": 54.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0_HS_5_0_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 24.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0_HS_5_0.png",
      "width": 820,
      "class": "ImageResourceLevel",
      "height": 374
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17,
   "yaw": 54.16
  }
 ],
 "id": "overlay_F76C9CED_E465_4CA3_41DF_2894742FF96A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.54,
   "yaw": 54.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A682BE4F_E4B9_B1E6_41E8_2442AD85F2D0",
   "pitch": 3.21,
   "hfov": 8.54,
   "yaw": 54.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB7EB643_E54A_D1E3_418C_C687494B4E13",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.05,
   "yaw": 49.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B, this.camera_F5A6E686_E5D2_0E1A_41E6_97C2AE324D01); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9940A4D_E4D4_03D7_41EB_998EB6B360A8",
   "pitch": -0.39,
   "hfov": 6.05,
   "yaw": 49.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2391E35_E4BC_03BD_41E4_2B0DAC715CDA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter Girls Hostel",
   "click": "this.setMediaBehaviour(this.playList_F0AFF40B_E5D2_022B_41D5_0E6539A6A94D, 0, this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0_HS_0_0.png",
      "width": 331,
      "class": "ImageResourceLevel",
      "height": 360
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.52,
   "yaw": -0.55
  }
 ],
 "id": "overlay_609A09E2_77D0_22F7_41B5_264D87FC301C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.94,
   "yaw": -114.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Campus Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643F5B74_7752_7715_41D1_AB6DD97131E8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F5B74_7752_7715_41D1_AB6DD97131E8_0_HS_2_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 252
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 23.55,
   "yaw": -114.18
  }
 ],
 "id": "overlay_F2FB4CBF_E06A_C95D_41EA_C6D395D83C67",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438, this.camera_F7162C4D_E5D2_022F_41E2_097224E958C9); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9907A4F_E4D4_03D3_41EA_0F24B5E86764",
   "pitch": -2.34,
   "hfov": 6.89,
   "yaw": -176.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FDBB81E1_E4D4_00D0_41EA_BBB27AEEA5C4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.97,
   "yaw": 31.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45, this.camera_F4B3E8E8_E5D2_0216_41EB_2D296C9222BD); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2574C96_E4C6_B286_41D4_A654133B4B20",
   "pitch": -3.17,
   "hfov": 11.97,
   "yaw": 31.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F09DD2DA_E45B_54E1_41E4_6592E756D62E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.91,
   "yaw": -132.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D, this.camera_F4A33908_E5D2_0216_41E8_6470F0A80B73); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C257EC96_E4C6_B286_41DC_4CD791844298",
   "pitch": -6.61,
   "hfov": 11.91,
   "yaw": -132.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1AF6243_E45B_57E7_41D5_71F60C9CE5D4",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.71,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA, this.camera_F49118A1_E5D2_0216_41A4_BC8075F3B3A5); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2565C97_E4C6_B286_41D4_6D748451EF76",
   "pitch": -8.43,
   "hfov": 13.71,
   "yaw": -32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F2BE3BE5_E45D_D4A3_41D1_E28E601B75D5",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.85,
   "yaw": -75.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0_HS_3_0.png",
      "width": 667,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.61,
   "yaw": -75.09
  }
 ],
 "id": "overlay_F2EEF17D_E45F_55A3_41EA_F884373AE60E",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.42,
   "yaw": -75.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0_HS_4_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_0_HS_4_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.49,
   "hfov": 8.42,
   "yaw": -75.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_F2ED19F4_E45C_D4A1_41AB_E9B4693491F7",
 "data": {
  "label": "Downstairs"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.58,
   "yaw": -50.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31, this.camera_F48168C7_E5D2_021A_41D2_BA49A25957EF); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2496C98_E4C6_B28A_41DF_B5800E256233",
   "pitch": -9.77,
   "hfov": 10.58,
   "yaw": -50.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3278474_E4A4_F3A1_41D1_CF9F6DE73CE9",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.84,
   "yaw": 128.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FE779_7752_FF1F_41A7_1896F5CE751F_0_HS_0_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 246
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.5,
   "yaw": 128.72
  }
 ],
 "id": "overlay_F2FB275D_E065_47DC_41DE_19200FD57743",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.51,
   "yaw": 137.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6871E55_E4B9_B1FA_41DB_29B57085C2BD",
   "pitch": -1.65,
   "hfov": 11.51,
   "yaw": 137.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C85801DF_E54B_D286_41C5_28DE08A5E88D",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.07,
   "yaw": 29.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6877E57_E4B9_B1E7_41EA_DF2966CEE84D",
   "pitch": -4.07,
   "hfov": 8.07,
   "yaw": 29.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D55038B7_E579_B29A_41E0_2101DCA30428",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.55,
   "yaw": 58.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2403CA4_E4C6_B2BA_41E6_1EFA58D6A564",
   "pitch": -0.33,
   "hfov": 11.55,
   "yaw": 58.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C69693CA_E4BB_54E3_41DA_1F971D0BA352",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.19,
   "yaw": 100.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9, this.camera_F7BA8B72_E5D2_06F5_41E8_BC9ED16766C3); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6803E54_E4B9_B1FA_41E8_9F172DB3A684",
   "pitch": -3.37,
   "hfov": 17.19,
   "yaw": 100.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C8437EAD_E549_AE8B_41E5_B69D2FDF78BB",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.52,
   "yaw": -166.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_1_HS_1_0.png",
      "width": 215,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.03,
   "yaw": -166.49
  }
 ],
 "id": "overlay_CBB17017_E546_5186_41E2_110BBAE740EA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit To Front Lobby",
   "click": "this.setMediaBehaviour(this.playList_EA2004DC_E5D2_022D_41A0_A295948928EA, 0, this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0_HS_0_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.07,
   "yaw": -82.51
  }
 ],
 "id": "overlay_78D3D4EB_77D0_62F5_41DD_B5809703F241",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.48,
   "yaw": 62.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9, this.camera_F7E86AD5_E5D2_063F_41C3_99FFEF80EECF); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B_0_HS_1_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.72,
   "yaw": 62.06
  }
 ],
 "id": "overlay_C6F49A1B_E4A5_D760_41D8_19E4624474A8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.3,
   "yaw": 152.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7, this.camera_F453E92B_E5D2_026B_41E7_B69D761C7CCA); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24E6CA2_E4C6_B2BE_41DC_A3D78090E7F0",
   "pitch": -1.74,
   "hfov": 8.3,
   "yaw": 152.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C4620CD0_E4BD_CCFF_41E9_4679EF850619",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.09,
   "yaw": -53.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01, this.camera_F442594C_E5D2_022E_41EC_9AA7DA835284); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC01198D_E3B4_0077_41E7_17C67A2191C4_1_HS_0_0.png",
      "width": 736,
      "class": "ImageResourceLevel",
      "height": 782
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.77,
   "yaw": -53.11
  }
 ],
 "id": "overlay_F8F8C95D_E4FC_01FA_41EA_77FDD0A3CC49",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0_HS_1_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.87,
   "yaw": -72.35
  }
 ],
 "id": "overlay_6E83BBE4_7836_5CDC_41DA_BC944E5CA924",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.54,
   "yaw": -51.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA22C4CA_E5D2_0215_41DD_694A01EC11E7, 0, this.panorama_643FC1CF_7752_5373_41D4_292811B701BB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98AAA38_E4D4_03BD_41BA_AF206A1996B2",
   "pitch": -7.67,
   "hfov": 4.54,
   "yaw": -51.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F144B246_E07B_D92F_41E9_B3C4F8DF18F8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.36,
   "yaw": 82.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA2264C8_E5D2_0215_41E4_D0E627A24676, 0, this.panorama_643EB254_7753_D115_41CA_DB8B6383D373)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9888A36_E4D4_03B5_41A6_8C9304D42A35",
   "pitch": -9.08,
   "hfov": 8.36,
   "yaw": 82.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F133356E_E07F_DBFC_41E9_9ABA7B2891A7",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.78,
   "yaw": 126.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F989BA37_E4D4_03B3_41CF_F82EE81ACE7E",
   "pitch": -1.94,
   "hfov": 9.78,
   "yaw": 126.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F15641BB_E07E_BB64_41E6_6FEC7A5AACE9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.1,
   "yaw": 143.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Computer Lab",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98A4A38_E4D4_03BD_41E9_9402001AF705",
   "pitch": -0.86,
   "hfov": 8.1,
   "yaw": 143.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F1581E84_E07D_4923_41D7_8903AC5A4F99",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.94,
   "yaw": 37.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD, this.camera_F7010C5D_E5D2_0229_41E4_F69254A336AF); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C253DC8F_E4C6_B286_41E6_8304ED4634A3",
   "pitch": -2.87,
   "hfov": 14.94,
   "yaw": 37.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F82B775B_E4FC_01FE_41E0_F63449D44383",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit",
   "click": "this.setMediaBehaviour(this.playList_EA23D4D6_E5D2_023D_41D5_EB07C19B5503, 0, this.panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EB1B0_6F0F_74F2_41B5_0BFD9049093D_0_HS_0_0.png",
      "width": 404,
      "class": "ImageResourceLevel",
      "height": 375
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.65,
   "yaw": -77.46
  }
 ],
 "id": "overlay_60873F69_6F32_7AA0_41D6_255AAA1C2CDE",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24B7C9B_E4C6_B28E_41D4_1FB9CA057468",
   "pitch": -5.41,
   "hfov": 10.96,
   "yaw": 5.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD932508_E4AC_DD60_419F_F91470695057",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.3,
   "yaw": 91.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA, this.camera_F5872625_E5D2_0E1E_41E6_2B8C0BD59360); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24BFC9C_E4C6_B28A_41B0_515F12A15CE6",
   "pitch": -9.25,
   "hfov": 10.3,
   "yaw": 91.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FE070A67_E4AC_B7A0_41EA_4C1A198563D5",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.55,
   "yaw": 72.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA, this.camera_F5BD7644_E5D2_0E1D_41DB_48FCDC2DFE40); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24A7C9D_E4C6_B28A_41C2_CE09378799CB",
   "pitch": -9.7,
   "hfov": 8.55,
   "yaw": 72.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_FE6FB507_E4AD_7D60_41E1_24FFBF172407",
 "data": {
  "label": "Circle Arrow 02 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.1,
   "yaw": 113.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_3_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7, this.camera_F5AB0668_E5D2_0E16_41D0_4C330D15ED9E); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_3_0.png",
      "width": 203,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78,
   "yaw": 113.96
  }
 ],
 "id": "overlay_FFB750D8_E4AB_54E0_41A7_588DC8C2FB2D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.6,
   "yaw": 119.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_0_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 277
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.05,
   "yaw": 119.12
  }
 ],
 "id": "overlay_CAD8D97D_E546_538B_41DB_957330ECF614",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.11,
   "yaw": 119.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6878E55_E4B9_B1FA_41D3_DC9798022256",
   "pitch": 0.98,
   "hfov": 6.11,
   "yaw": 119.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA4062CA_E57A_D68B_41EA_75EFEEC281A7",
 "data": {
  "label": "Circle Arrow 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.35,
   "yaw": -90.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73, this.camera_F41CE9A5_E5D2_021F_41BD_B635EB2A6619); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A687DE55_E4B9_B1FA_41DF_C788FC240D21",
   "pitch": -4.41,
   "hfov": 20.35,
   "yaw": -90.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1C7421C_E54A_B19B_41E6_B24833AD08A8",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.82,
   "yaw": -13.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED, this.camera_F40F49C0_E5D2_0215_41CD_95E15127742E); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6873E55_E4B9_B1FA_41D2_F619AE03DEFC",
   "pitch": 0.28,
   "hfov": 6.82,
   "yaw": -13.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D1772A09_E546_D17B_41D0_448C0F7F4012",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6,
   "yaw": -3.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA, this.camera_F7A5FBCB_E5D2_062B_41E8_D024BD4EBC20); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F997CA4F_E4D4_03D3_41DC_C04AD311B325",
   "pitch": -2.07,
   "hfov": 6,
   "yaw": -3.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD2D37E8_E4D4_00D0_41E1_DA3D57DD00AB",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Outside Mart",
   "click": "this.setMediaBehaviour(this.playList_EA23D4D6_E5D2_023D_41D5_EB07C19B5503, 0, this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_1_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.66,
   "yaw": -88.33
  }
 ],
 "id": "overlay_6844964E_783E_D7EC_41C0_33EEA60F9A5F",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Gy Hallway",
   "click": "this.setMediaBehaviour(this.playList_EA22F4CC_E5D2_022D_41E8_0F65A4525AC6, 0, this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_2_0.png",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 61
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.99,
   "yaw": 70.66
  }
 ],
 "id": "overlay_68869354_783F_CDFC_41C8_BD4628060470",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_3_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.07,
   "yaw": -134.16
  }
 ],
 "id": "overlay_684AD03A_783E_4BB5_41D3_4DAECADAC49A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.24,
   "yaw": -57.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter Cafe",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9810A42_E4D4_03CD_41E7_E2F2DAA25944",
   "pitch": -10.17,
   "hfov": 7.24,
   "yaw": -57.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F26CA89C_E06B_C923_41C9_7E661F0E3089",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -150.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_6_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.35,
   "yaw": -150.83
  }
 ],
 "id": "overlay_D3E22E59_E55A_5199_41C0_400CB0643637",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.2,
   "yaw": 112.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_7_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 86
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.03,
   "yaw": 112.87
  }
 ],
 "id": "overlay_DCF88FCC_E55A_AEFE_41D9_DDAB70857DFD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.15,
   "yaw": -35.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Cricket Ground",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9882A35_E4D4_03B7_41E3_11F3916F20B6",
   "pitch": -6.18,
   "hfov": 8.15,
   "yaw": -35.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0BE30AC_E07A_B963_41E1_A0EDEBF5ED83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -147.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_643F1170_7752_D32D_417E_DEBF705E32D4, this.camera_F7F80AA7_E5D2_061B_41E6_F5D1B080F4E8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0_HS_3_0.png",
      "width": 120,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 26.93,
   "yaw": -147.54
  }
 ],
 "id": "overlay_F13522D5_E07D_592C_41B9_9B4BE2C9E3EC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Front Lobby",
   "click": "this.startPanoramaWithCamera(this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD, this.camera_F7668C33_E5D2_027A_41C3_449CA3A3C071); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0_HS_0_0.png",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 89
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.58,
   "yaw": -46.22
  }
 ],
 "id": "overlay_7914C5D1_77D0_22D5_41D6_091745E8979B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Outside Admin",
   "click": "this.setMediaBehaviour(this.playList_EA2004DC_E5D2_022D_41A0_A295948928EA, 0, this.panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0_HS_1_0.png",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 40
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.55,
   "yaw": -45.36
  }
 ],
 "id": "overlay_78573511_77D0_2355_41BB_3EA4E54D3C86",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E0FCF_6F0C_8CAE_41C6_2FA4F702293E_0_HS_2_0.png",
      "width": 253,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.52,
   "yaw": 155.69
  }
 ],
 "id": "overlay_781ABA33_77D1_E156_41AE_5C7612A7C5CD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.83,
   "yaw": -28.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Cricket Ground",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_5_0.png",
      "width": 86,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.66,
   "yaw": -28.96
  }
 ],
 "id": "overlay_F198D81C_E05F_FD53_41BB_A2664A01A527",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.5,
   "yaw": -59.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Mosque",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_6_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.28,
   "yaw": -59.88
  }
 ],
 "id": "overlay_F1F91F12_E050_1354_41D9_DA9809572556",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 61.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_7_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Towards Cafeteria ",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_7_0.png",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66,
   "yaw": 61.1
  }
 ],
 "id": "overlay_F2AC0938_E050_FF54_41D1_4B6C7024823C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 81.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_8_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Towards Female Hostels",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_8_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 57
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.06,
   "yaw": 81.9
  }
 ],
 "id": "overlay_F391E344_E050_133C_41E2_03457150295B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.65,
   "yaw": -0.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_9_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643E9203_7753_D0F3_41D1_C2233142A975)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9F34A2C_E4D4_0355_41EC_38A5A80894AE",
   "pitch": -19.94,
   "hfov": 4.65,
   "yaw": -0.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F292A6BF_E070_F54D_41DA_003D95E31E6B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14,
   "yaw": 73.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_10_1_0_map.gif",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_10_0.png",
      "width": 251,
      "class": "ImageResourceLevel",
      "height": 162
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.82,
   "yaw": 73.37
  }
 ],
 "id": "overlay_C836DA47_E5BA_F186_41E9_A1C4C7C3C895",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.97,
   "yaw": 76.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_11_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_11_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.46,
   "hfov": 10.97,
   "yaw": 76.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_C2D05AB1_E5BE_569B_41E5_AE8A5F692797",
 "data": {
  "label": "Dental College"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.28,
   "yaw": 77.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_12_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_12_0.png",
      "width": 112,
      "class": "ImageResourceLevel",
      "height": 102
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "yaw": 77.82
  }
 ],
 "id": "overlay_CC57F44C_E547_D189_41AB_0C48847FCB4A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0_HS_1_0.png",
      "width": 251,
      "class": "ImageResourceLevel",
      "height": 231
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.38,
   "yaw": -21.74
  }
 ],
 "id": "overlay_60360F83_77F0_3F35_41A6_BCD95F0A9E83",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.26,
   "yaw": 164.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Hostel Room",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9927A52_E4D4_03CD_41E2_8B3E8D68C11E",
   "pitch": -20.78,
   "hfov": 21.26,
   "yaw": 164.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9259D44_E0A7_CB23_41C8_EB8E6F2AF47D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Basketball Court",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0_HS_1_0.png",
      "width": 297,
      "class": "ImageResourceLevel",
      "height": 294
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.15,
   "yaw": 74.53
  }
 ],
 "id": "overlay_6269E14D_77D0_23CD_41D8_87DEFF93CEC8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.38,
   "yaw": -176.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9910A50_E4D4_03CD_41CB_D6A4392C2F64",
   "pitch": -1.22,
   "hfov": 10.38,
   "yaw": -176.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F92E9329_E0A6_BF65_41E1_D74EE04633FF",
 "data": {
  "label": "Image"
 }
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 22.2,
 "bleaching": 0.38,
 "id": "overlay_6363813C_6F36_46A1_41C2_4AE5D38ECA95",
 "yaw": -85.56
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 21.11,
 "bleaching": 0.7,
 "id": "overlay_63661660_6F36_4AA1_41D5_7262BA71AAC1",
 "yaw": -1.82
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.47,
   "yaw": -173.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_2_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 161
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61,
   "yaw": -173.85
  }
 ],
 "id": "overlay_61F287AB_6F31_C9A0_41D0_E035D81069EC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter Stationary Shop",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_3_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 81
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88,
   "yaw": 171.35
  }
 ],
 "id": "overlay_61B99997_6F36_C660_41DA_BBB1C8A075C0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.15,
   "yaw": 102.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9AE9A55_E4D4_03F7_41C6_D4191A44A543",
   "pitch": -23.91,
   "hfov": 15.15,
   "yaw": 102.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB0D702F_E0AD_797D_41C1_F06E21552CED",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.29,
   "yaw": -83.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_6_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Aerial View",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_6_0.png",
      "width": 235,
      "class": "ImageResourceLevel",
      "height": 167
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.45,
   "yaw": -83.59
  }
 ],
 "id": "overlay_FEA8CF2C_E0AE_C77C_41DE_95A8BAC018D9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.75,
   "yaw": -81.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16EE3F_E3B4_0091_41D0_D333700ECFC4_1_HS_0_0.png",
      "width": 522,
      "class": "ImageResourceLevel",
      "height": 476
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.1,
   "yaw": -81.78
  }
 ],
 "id": "overlay_F3A21B8F_E4CC_0150_41C8_24A9D18D4F10",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.84,
   "yaw": -56.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17A431_E3B4_00AA_41C7_71006D976A31, this.camera_F512C751_E5D2_0E37_41D8_399A04795097); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9949A4D_E4D4_03D7_41CC_7051A5F2681B",
   "pitch": -9.72,
   "hfov": 8.84,
   "yaw": -56.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2CEF7E8_E4B4_00D2_41EB_0A0E434CD034",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.75,
   "yaw": -172.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA, this.camera_F50DE773_E5D2_0EFA_41AD_AE7B03828B9F); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9950A4E_E4D4_03D5_41B9_DE07EC6DC981",
   "pitch": -11.17,
   "hfov": 8.75,
   "yaw": -172.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2C1E9A2_E4B4_0156_41A8_C8BD475EA7A1",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.04,
   "yaw": -9.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643E3B19_7752_F71F_41D3_DFACA6FCAF03_0_HS_1_0.png",
      "width": 225,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.66,
   "yaw": -9.21
  }
 ],
 "id": "overlay_F19C4F57_E065_C72D_41CD_B4C7EE753725",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.33,
   "yaw": -161.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0_HS_0_0_0_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA23D4D6_E5D2_023D_41D5_EB07C19B5503, 0, this.panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0_HS_0_0.png",
      "width": 133,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.86,
   "yaw": -161.8
  }
 ],
 "id": "overlay_7E57C276_6F52_CAA1_41D4_FD1C6368B9EA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter Cafeteria",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0_HS_1_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.68,
   "yaw": -67.5
  }
 ],
 "id": "overlay_7F22C471_6F56_4EA0_41CD_E15423EC56DB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter GYM",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E2B2A_6F0C_F596_41C6_C6233EE2880D_0_HS_2_0.png",
      "width": 488,
      "class": "ImageResourceLevel",
      "height": 502
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45,
   "yaw": 11.24
  }
 ],
 "id": "overlay_7EFB3AA8_6F56_3BA0_41CF_98D0133C488D",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.9,
   "yaw": 57.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0_HS_0_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 183
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.02,
   "yaw": 57.42
  }
 ],
 "id": "overlay_61E155D9_77D0_22D5_41D8_0CCEE182B96A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.15,
   "yaw": 29.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Library",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666EF816_6F0F_93BF_41BA_F12FA5C64400_0_HS_1_0.png",
      "width": 163,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.82,
   "yaw": 29.42
  }
 ],
 "id": "overlay_74BE18C5_782E_3CDC_41A8_694D01199439",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to Courtyard",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0_HS_0_0.png",
      "width": 277,
      "class": "ImageResourceLevel",
      "height": 370
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.07,
   "yaw": 2.02
  }
 ],
 "id": "overlay_649B0D85_7830_2332_4199_B512F01B4577",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.73,
   "yaw": 99.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9908A50_E4D4_03CD_41D6_7CB710A3B0B4",
   "pitch": -25.58,
   "hfov": 23.73,
   "yaw": 99.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F6D47A07_E09D_492C_41CF_298D28BE7554",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.54,
   "yaw": 86.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA, this.camera_F731EC76_E5D2_02FA_41E6_2017EEAC0F4D); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2415CA4_E4C6_B2BA_41E9_588E1A203082",
   "pitch": -0.39,
   "hfov": 8.54,
   "yaw": 86.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C5477B5E_E4BD_55E3_41C0_25322F8EE909",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.31,
   "yaw": -22.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438, this.camera_F7987B0F_E5D2_062B_419B_AF057A7F5384); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2551C90_E4C6_B29A_41CF_C85FC1558792",
   "pitch": -16.06,
   "hfov": 15.31,
   "yaw": -22.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F9C7E13E_E4FC_01B6_41E7_491D2D7978F7",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.08,
   "yaw": 155.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C, this.camera_F78AEB43_E5D2_061B_41E0_2309E5C50069); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_1_0.png",
      "width": 267,
      "class": "ImageResourceLevel",
      "height": 288
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.18,
   "yaw": 155.48
  }
 ],
 "id": "overlay_EA884DBB_E46B_CCA6_41AD_A439C1E733EF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.91,
   "yaw": 155.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_2_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_2_0.png",
      "width": 195,
      "class": "ImageResourceLevel",
      "height": 101
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.99,
   "hfov": 5.91,
   "yaw": 155.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_EB620D3F_E46B_4D9E_41E2_10CA961B0997",
 "data": {
  "label": "Library"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 41.13,
   "yaw": -10.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit Mart",
   "click": "this.setMediaBehaviour(this.playList_EA23D4D6_E5D2_023D_41D5_EB07C19B5503, 0, this.panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9823A42_E4D4_03CD_41E9_19891E62E9D9",
   "pitch": -19.38,
   "hfov": 41.13,
   "yaw": -10.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F203A974_E06D_4BE3_41D3_EBE2ADD071AC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.07,
   "yaw": 89.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Front Aerial View",
   "click": "this.setMediaBehaviour(this.playList_EA3514BE_E5D2_026D_41E9_3EA930F8B45C, 0, this.panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_3_0.png",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 60
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.61,
   "yaw": 89.18
  }
 ],
 "id": "overlay_F1342718_E065_C724_41C6_683FE8C5EC1B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.06,
   "yaw": 132.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Mosque",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F98FAA34_E4D4_03B5_41B3_F5F7893301BB",
   "pitch": -4.62,
   "hfov": 5.06,
   "yaw": 132.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0DC35B9_E065_5B65_41DB_1640D621DB29",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.75,
   "yaw": 58.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Basketball court",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9887A35_E4D4_03B7_41D1_1A064EBFDA80",
   "pitch": -5.2,
   "hfov": 4.75,
   "yaw": 58.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F0AAB8BE_E07A_C95F_41E0_F687F2989076",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Exit to hallway",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0_HS_2_0.png",
      "width": 318,
      "class": "ImageResourceLevel",
      "height": 329
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.13,
   "yaw": -159.92
  }
 ],
 "id": "overlay_771B21D8_7836_4CF5_41D3_B4771DA2F6D6",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.73,
   "yaw": 178.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9ADDA54_E4D4_03F5_41E7_583D9CCB9CE7",
   "pitch": -14.98,
   "hfov": 19.73,
   "yaw": 178.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBA43BF4_E0AB_4EEC_41AE_38DCA1354B3C",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.93,
   "yaw": -22.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9959A4E_E4D4_03D5_41DB_B3710155FB36",
   "pitch": -2.17,
   "hfov": 7.93,
   "yaw": -22.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F31BAC93_E4CC_0777_41D8_D2308C1A86F7",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.43,
   "yaw": -0.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_2_1_0_map.gif",
      "width": 111,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "id": "overlay_7957E005_77CD_3049_41BE_D2C1477E0B28",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.55,
   "yaw": -0.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Enter",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F991FA50_E4D4_03CD_41E4_E599B195C645",
   "pitch": -13.31,
   "hfov": 5.55,
   "yaw": -0.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F8F69AB3_E09A_C965_41EA_94616ABD7FFF",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.09,
   "yaw": 79.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_6_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "To Mart",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_6_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.61,
   "yaw": 79.54
  }
 ],
 "id": "overlay_F873460F_E09B_B93D_41C9_76D2147F8C80",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.14,
   "yaw": 178.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_7_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.95
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "High Aerial View",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F9925A50_E4D4_03CD_4188_22FEEF0CDAC7",
   "pitch": -23.95,
   "hfov": 9.14,
   "yaw": 178.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F888CC9E_E09A_C95F_41D7_EEC6D9043660",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.58,
   "yaw": -79.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_8_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Mosque",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_8_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.11,
   "yaw": -79.83
  }
 ],
 "id": "overlay_FAB3FCFC_E0A5_4AE3_41D0_BAFEA584D3BD",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.44,
   "yaw": 93.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_9_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_9_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5,
   "yaw": 93.69
  }
 ],
 "id": "overlay_C2276442_E54A_F1F9_41E9_A6EBA44DC429",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.55,
   "yaw": 87.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6526C812_6F0C_F3B6_41CA_75DFDECF860B, this.camera_F7D9CA48_E5D2_0616_41C3_EF503ACD5C44); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24C5CA0_E4C6_B2BA_41E0_6C0DC0280BDC",
   "pitch": -5.03,
   "hfov": 10.55,
   "yaw": 87.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FAA769E4_E4A5_54A0_41EC_87C3B886D2DE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.25,
   "yaw": -175.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1, this.camera_F7C93A7A_E5D2_06EA_41EA_32C6836A0A16); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24C8CA0_E4C6_B2BB_41D6_DFD784333D7A",
   "pitch": -13.76,
   "hfov": 13.25,
   "yaw": -175.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FBBB3142_E4A4_D5E0_41E1_9C362AE822B0",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0_HS_0_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.27,
   "yaw": 57.34
  }
 ],
 "id": "overlay_7A975EAB_77D0_2175_41D2_418A48689C50",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "toolTip": "Front Lobby",
   "click": "this.startPanoramaWithCamera(this.panorama_7AC90545_77CA_F0CE_41DA_45C0D215FDFD, this.camera_F7B52B9F_E5D2_062A_41DA_821E8365ABC2); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_666E4AEB_6F0C_9496_41C7_1A0B18B99ECE_0_HS_1_0.png",
      "width": 110,
      "class": "ImageResourceLevel",
      "height": 51
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.91,
   "yaw": -104.41
  }
 ],
 "id": "overlay_7A25DC31_77D0_2155_41AD_7C150136EE3B",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.1,
   "yaw": 88.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9, this.camera_F7544BE8_E5D2_0615_41E5_65444C0EC9EF); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24F7CA1_E4C6_B2BA_41E7_E95250BDA69D",
   "pitch": -14.61,
   "hfov": 10.1,
   "yaw": 88.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FB2C7BD3_E4BB_F4E1_41C7_231A9969D09C",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.19,
   "yaw": -1.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C24FECA2_E4C6_B2BE_41DE_644EAE976AF7",
   "pitch": -6.74,
   "hfov": 8.19,
   "yaw": -1.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C48E6CCA_E4BC_CCE0_41CE_78A5DEEF5220",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.74,
   "yaw": -85.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_643E1E1B_7752_3113_41DB_5479F4113EB7, this.camera_F7444C06_E5D2_021A_41E7_3367C0397F54); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CE79B670_E54A_B19A_41A7_1720EED6CAB6",
   "pitch": -18.44,
   "hfov": 11.74,
   "yaw": -85.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C7DF80D2_E5D9_B299_41B0_4F0C18C0A355",
 "data": {
  "label": "Circle Arrow 02b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.56,
   "yaw": -89.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0_HS_3_1_0_map.gif",
      "width": 92,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.56,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0_HS_3_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 143
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.16,
   "yaw": -89.58
  }
 ],
 "id": "overlay_C6CE6AE4_E5DB_B6B9_41CF_966809629076",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.63,
   "yaw": -21.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1D2B924_E5CF_D3BA_41D2_119492467424, this.camera_F46C1988_E5D2_0216_41D2_B7571776796E); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A6863E57_E4B9_B1E7_41E2_EDCE4F5DF8B9",
   "pitch": 7.81,
   "hfov": 8.63,
   "yaw": -21.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D6C04018_E54F_D19C_41EA_D3F31AF750CE",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 441.2,
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "overflow": "scroll",
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "top": 2,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 53.2,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "white block"
 },
 "shadowBlurRadius": 7
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "width": 424.8,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "Rashid Latif Medical College",
 "minHeight": 1,
 "propagateClick": true,
 "top": 0,
 "height": 57.4,
 "verticalAlign": "top",
 "minWidth": 1,
 "fontSize": "35px",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "italic",
 "fontColor": "#000000",
 "class": "Label",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold"
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "width": 330,
 "backgroundOpacity": 0,
 "right": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "right": "15%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "right": "15%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "10%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "top": "10%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": true,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "verticalAlign": "top",
 "shadowSpread": 1,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "backgroundOpacity": 0,
 "right": "15%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "10%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C249CC99_E4C6_B28A_41EB_1CFBAF06A893",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C2485C9A_E4C6_B28E_41C3_1B8D4585CE82",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC03C840_E3B4_00EB_41AE_1C4A6AFA443B_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C248FC9A_E4C6_B28E_41DA_4CAF35E48198",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F2DDE_7752_D315_41D4_EE3F94FF07B0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F985AA3D_E4D4_03B7_41BE_394EF33FFEE3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D3B419_E5CE_718D_41EA_0828CDF51A73_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A686DE57_E4B9_B1E7_41EB_306C5D9CCCED",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98B8A3B_E4D4_03B3_41C3_1C5AB4C8C764",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666EF97A_6F0C_B476_41CE_C18FE1589392_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9844A3C_E4D4_03B5_41E7_E37041250C45",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC16717F_E3B4_0097_41E6_E43A9FAE9EF6_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24ECCA3_E4C6_B2BE_41E0_07E2E4149BE7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24D3C9E_E4C6_B286_41BD_F9CBBAA2FBF3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_C24D8C9F_E4C6_B286_41B9_246B7B0002BC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7820B2_E3B4_01AF_41C3_218BCB0978A7_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A681CE52_E4B9_B1FE_41C1_BD404D9AF26A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_F99D0A48_E4D4_03DD_41DC_0DA3E1CEB09C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_F99DBA48_E4D4_03DD_41EB_3D33D3EAD60C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643E1E1B_7752_3113_41DB_5479F4113EB7_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F99E5A48_E4D4_03DD_41D6_FD90A990EDE6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F98C2A2F_E4D4_0353_41DD_F6AEEE794710",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98CAA30_E4D4_034D_4169_52CA1009DE68",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_9_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98D2A31_E4D4_034F_41CF_CEA720BBC7C0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_11_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98DAA32_E4D4_034D_419F_47C516C6A8C9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_12_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98E7A32_E4D4_034D_41E8_D7CBC937769D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F1170_7752_D32D_417E_DEBF705E32D4_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F98EEA32_E4D4_034D_41D0_80084EC693F4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1C6CA00_E5CE_5179_41E4_0DA991D9CDC9_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A686FE57_E4B9_B1E7_41D5_2BF63EC26C41",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F996CA4F_E4D4_03D3_41E3_25862F39297A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC078A32_E3B4_0092_41E3_23A6BB201B01_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F9977A4F_E4D4_03D3_41EB_FE7C0D15E8D1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1DCFDD9_E5CF_F28B_41E5_1FEB897D0D1D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6807E54_E4B9_B1FA_41CF_7307AA143A4C",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2546C92_E4C6_B29E_41E6_5C834E47AB8A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2548C93_E4C6_B29E_41C7_F43ECE39A009",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2571C93_E4C6_B29E_41E4_F34ABEAFF8C1",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2578C94_E4C6_B29A_41C3_C03F850D89F5",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C2567C94_E4C6_B29A_41D5_4D9D5F064909",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17BFDE_E3B4_7F94_41E2_82687A758438_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A682BE4F_E4B9_B1E6_41E8_2442AD85F2D0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC169295_E3B4_0190_41BF_38E86C52F94D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F9940A4D_E4D4_03D7_41EB_998EB6B360A8",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC16B02E_E3B4_00B2_41D4_965E231B9342_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F9907A4F_E4D4_03D3_41EA_0F24B5E86764",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2574C96_E4C6_B286_41D4_A654133B4B20",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C257EC96_E4C6_B286_41DC_4CD791844298",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2565C97_E4C6_B286_41D4_6D748451EF76",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC066C46_E3B4_00F7_41E2_CBB7CD3F71EA_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C2496C98_E4C6_B28A_41DF_B5800E256233",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6871E55_E4B9_B1FA_41DB_29B57085C2BD",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D2BE4F_E5CF_B186_41B0_69BEF52EC79B_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6877E57_E4B9_B1E7_41EA_DF2966CEE84D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC16596B_E3B4_00B8_41BE_3F147F4776A3_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2403CA4_E4C6_B2BA_41E6_1EFA58D6A564",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CD3E286A_E5CF_D18E_41DC_23B5A1B8D075_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6803E54_E4B9_B1FA_41E8_9F172DB3A684",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7CE545_E3B4_00EA_41B3_BCA90DFA5153_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24E6CA2_E4C6_B2BE_41DC_A3D78090E7F0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643FC1CF_7752_5373_41D4_292811B701BB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F98AAA38_E4D4_03BD_41BA_AF206A1996B2",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9888A36_E4D4_03B5_41A6_8C9304D42A35",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F989BA37_E4D4_03B3_41CF_F82EE81ACE7E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643EB254_7753_D115_41CA_DB8B6383D373_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F98A4A38_E4D4_03BD_41E9_9402001AF705",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC166D3D_E3B4_0094_41D4_4C077C54FC6C_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C253DC8F_E4C6_B286_41E6_8304ED4634A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24B7C9B_E4C6_B28E_41D4_1FB9CA057468",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C24BFC9C_E4C6_B28A_41B0_515F12A15CE6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17A431_E3B4_00AA_41C7_71006D976A31_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24A7C9D_E4C6_B28A_41C2_CE09378799CB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6878E55_E4B9_B1FA_41D3_DC9798022256",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A687DE55_E4B9_B1FA_41DF_C788FC240D21",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1D2B924_E5CF_D3BA_41D2_119492467424_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6873E55_E4B9_B1FA_41D2_F619AE03DEFC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC16A519_E3B4_009E_41D1_03532CCEAF45_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F997CA4F_E4D4_03D3_41DC_C04AD311B325",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643FEECC_7752_5176_41DB_AE9F3C7255EB_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F9810A42_E4D4_03CD_41E7_E2F2DAA25944",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643F6A9F_7751_F113_41D8_39DF3DF867FE_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9882A35_E4D4_03B7_41E3_11F3916F20B6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 22,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643E9203_7753_D0F3_41D1_C2233142A975_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9F34A2C_E4D4_0355_41EC_38A5A80894AE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666EE46F_6F0F_FC6E_41DA_FF58EBD90B55_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9927A52_E4D4_03CD_41E2_8B3E8D68C11E",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666D655C_6F0C_9DB2_41B2_67B26335C2F5_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9910A50_E4D4_03CD_41CB_D6A4392C2F64",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666E06C2_6F0C_BC96_41C0_1E5C4D92B115_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9AE9A55_E4D4_03F7_41C6_D4191A44A543",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_F9949A4D_E4D4_03D7_41CC_7051A5F2681B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC07DD90_E3B4_0390_41DD_1CFE3A9498BA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_F9950A4E_E4D4_03D5_41B9_DE07EC6DC981",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643EEF2E_7752_2F35_41A6_C0DFA8CD8FB3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9908A50_E4D4_03CD_41D6_7CB710A3B0B4",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC011E60_E3B4_00A9_41E0_F4DCBC0A842D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C2415CA4_E4C6_B2BA_41E9_588E1A203082",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC06C52A_E3B4_00BC_41E8_BE55D3FD2DFD_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C2551C90_E4C6_B29A_41CF_C85FC1558792",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666E4F25_6F0C_8D92_41B1_6C4457A1B3D0_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_F9823A42_E4D4_03CD_41E9_19891E62E9D9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F98FAA34_E4D4_03B5_41B3_F5F7893301BB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_643FDC99_7752_D11E_41D9_5C1F2771B51E_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_F9887A35_E4D4_03B7_41D1_1A064EBFDA80",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_666E800A_6F0F_9397_41D5_4C376CF0BA95_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9ADDA54_E4D4_03F5_41E7_583D9CCB9CE7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC16A7BB_E3B4_0F90_41E3_90FBC5CCB986_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F9959A4E_E4D4_03D5_41DB_B3710155FB36",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_F991FA50_E4D4_03CD_41E4_E599B195C645",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_6439F50F_7752_30F2_41CF_4D61331475E3_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_F9925A50_E4D4_03CD_4188_22FEEF0CDAC7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24C5CA0_E4C6_B2BA_41E0_6C0DC0280BDC",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC17CC78_E3B4_009B_41E2_86AC140EC2B9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C24C8CA0_E4C6_B2BB_41D6_DFD784333D7A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_C24F7CA1_E4C6_B2BA_41E7_E95250BDA69D",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C24FECA2_E4C6_B2BE_41DE_644EAE976AF7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_EC7D38A2_E3B4_01AE_41D3_6BA9788B1BD1_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "id": "AnimatedImageResource_CE79B670_E54A_B19A_41A7_1720EED6CAB6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_C1DA6E74_E5CE_7199_41DE_9B86D66EB9ED_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_A6863E57_E4B9_B1E7_41E2_EDCE4F5DF8B9",
 "rowCount": 6,
 "colCount": 4
},
{
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "width": "90%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "width": 50,
 "backgroundOpacity": 0,
 "right": 9,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "borderRadius": 0,
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 140,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "backgroundOpacity": 0,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "scrollBarMargin": 2,
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "propagateClick": true,
 "itemMinHeight": 50,
 "itemOpacity": 1,
 "height": "92%",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMinWidth": 50,
 "itemBackgroundColor": [],
 "minWidth": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemPaddingTop": 3,
 "scrollBarColor": "#04A3E1",
 "class": "ThumbnailGrid",
 "shadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHeight": 160,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "itemLabelFontSize": 16,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelFontColor": "#666666",
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "selectedItemThumbnailShadow": true,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "italic",
 "itemMaxHeight": 1000,
 "itemWidth": 220,
 "paddingTop": 10,
 "itemMode": "normal",
 "itemLabelHorizontalAlign": "center",
 "horizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailBorderRadius": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "shadow": false,
 "data": {
  "name": "WebFrame"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "width": "55%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "width": "45%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 60,
 "borderRadius": 0,
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "paddingRight": 40,
 "paddingLeft": 40,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 40,
 "paddingTop": 40,
 "height": "100%",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 }
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": 60,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": true,
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "height": "100%",
 "toolTipBackgroundColor": "#FFFFFF",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "13px",
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": true,
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 }
},
{
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": "5%",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "width": "71.429%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "0%",
 "height": "23.535%",
 "verticalAlign": "top",
 "minWidth": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('http://www.rlku.edu.pk', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "26%",
 "bottom": "26%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "height": 130,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-1"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_F6A64388_E4BA_568B_4195_F3B986E056C2"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "19.11%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-2"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_D93BBE7F_E55A_B19C_41DF_FEA2736C3970"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-3"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882"
 ],
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-4"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189"
 ],
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-5"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "25%",
 "bottom": "25%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-6"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.78vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.78vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.32vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.74vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.75vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": 180,
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 50,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 50,
 "gap": 5,
 "fontStyle": "italic",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "class": "Button",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "46%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.25vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.78vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.78vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarOpacity": 0
},
{
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "75%",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "RLMC Building >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "RLMC LABS >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "pressedLabel": "Inserdt Text",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "DENTAL COLLEGE >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Hostels >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "CAFETERIA >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "SPORTS FACILITIES >",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "width": 40,
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 2,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "class": "HTMLText",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 56,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 44,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 20)",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Main Lobby",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Courtyard",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "pressedLabel": "Reception",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Auditorium",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Library GROUND FLOOR",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 31)",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LIBRARY 1ST FLOOR",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "lecture Hall",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "MOSQUE",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "AERIAL VIEW",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Garden",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Lorem Ipsum",
 "fontStyle": "italic",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 28)",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "ANATOMY MUSEUM",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "DISECTION HALL",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 27)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "SKILLS LAB",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 43)",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHARMACOLOGY LAB",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 22)",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BIO-CHEM LAB",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 5"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 44)",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHYSIOLOGY LAB",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 41)",
 "id": "Button_F6A64388_E4BA_568B_4195_F3B986E056C2",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PATHOLOGY LAB",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 6"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 46)",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "DENTAL COLLEGE AERIAL VIEW",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 48)",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "DENTAL COLLEGE LOBBY",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 51)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "OPERATIVE DENTISTRY",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 49)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_D93BBE7F_E55A_B19C_41DF_FEA2736C3970",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHANTOM HEAD",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 17)",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Ground",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setMediaBehaviour(this.playList_F0AFF40B_E5D2_022B_41D5_0E6539A6A94D, 0)",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Mess Area",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 18)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Bedroom",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "CAFETERIA",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 14)",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "MART",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "STATIONARY STORE",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "GYM",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 4"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Container",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "CRICKET GROUND",
 "fontStyle": "italic",
 "rollOverShadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 1"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 3)",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BASKETBALL COURT",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 2"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "layout": "horizontal",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "GYM",
 "fontStyle": "italic",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "class": "Button",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 3"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "shadow": false,
 "horizontalAlign": "left",
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "width": "75%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.32vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.74vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.74vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.16vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.16vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "class": "HTMLText",
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "click": "this.openLink('http://www.rlmc.edu.pk', '_blank')",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "click": "this.openLink('https://maps.app.goo.gl/8jQgFkDnaqUpChP3A', '_blank')",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 51.6,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "height": 45.6,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.openLink('https://www.facebook.com/rlmc.edu.pk/', '_blank')",
 "paddingTop": 0,
 "transparencyActive": true,
 "class": "IconButton",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "width": 50,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton --"
 },
 "cursor": "hand"
}],
 "scrollBarMargin": 2,
 "propagateClick": true,
 "vrPolyfillScale": 0.73,
 "verticalAlign": "top",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "gap": 10,
 "layout": "absolute",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "height": "100%",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
