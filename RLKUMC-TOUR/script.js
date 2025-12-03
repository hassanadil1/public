(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 20,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Histology Lab",
 "id": "panorama_55662C59_741A_317E_41CA_F993B7EE3874",
 "overlays": [
  "this.overlay_53B56F5B_747B_EF72_41C8_D7AC8F46C7E0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Admin Block",
 "id": "panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
 "overlays": [
  "this.overlay_65352748_738A_1D01_41B1_EB7BB12CF284"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera"
  },
  {
   "media": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera"
  },
  {
   "media": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera"
  },
  {
   "media": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera"
  },
  {
   "media": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera"
  },
  {
   "media": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera"
  },
  {
   "media": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera"
  },
  {
   "media": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera"
  },
  {
   "media": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera"
  },
  {
   "media": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera"
  },
  {
   "media": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera"
  },
  {
   "media": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera"
  },
  {
   "media": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera"
  },
  {
   "media": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera"
  },
  {
   "media": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera"
  },
  {
   "media": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera"
  },
  {
   "media": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera"
  },
  {
   "media": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera"
  },
  {
   "media": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera"
  },
  {
   "media": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera"
  },
  {
   "media": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera"
  },
  {
   "media": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera"
  },
  {
   "media": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera"
  },
  {
   "media": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera"
  },
  {
   "media": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera"
  },
  {
   "media": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera"
  },
  {
   "media": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera"
  },
  {
   "media": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera"
  },
  {
   "media": "this.panorama_556414ED_741A_3156_4158_568C72D095C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_556414ED_741A_3156_4158_568C72D095C6_camera"
  },
  {
   "media": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004_camera"
  },
  {
   "media": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera"
  },
  {
   "media": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094_camera"
  },
  {
   "media": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera"
  },
  {
   "media": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera"
  },
  {
   "media": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera"
  },
  {
   "media": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera"
  },
  {
   "media": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera"
  },
  {
   "media": "this.panorama_55A0234E_7416_3752_4194_2188873BB455",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55A0234E_7416_3752_4194_2188873BB455_camera"
  },
  {
   "media": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera"
  },
  {
   "media": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 23.55,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -1.34
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -14.72,
  "class": "PanoramaCameraPosition",
  "pitch": -0.3
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55681365_741A_7756_41DB_6DE163FFE094_camera",
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
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ground Floor Right Side",
 "id": "panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
 "overlays": [
  "this.overlay_52E23B1C_738A_3502_41D3_C40C081FAA7F",
  "this.overlay_520109A8_738E_1501_41C6_A9AEC2763674",
  "this.overlay_5239DBD0_738E_3502_41AB_A531B954A028"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Common Room",
 "id": "panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
 "overlays": [
  "this.overlay_6A0DF7AA_743A_1FD2_419B_2B827CCEBA3D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "D2",
 "id": "panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
 "overlays": [
  "this.overlay_58ECBF1A_737E_6D01_41DB_493201319C26"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Biochemistry Lab",
 "id": "panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
 "overlays": [
  "this.overlay_52BD4931_73BA_3502_41B0_C503ABBE27BD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Skills Lab",
 "id": "panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
 "overlays": [
  "this.overlay_5CCF0547_747A_1353_41B4_133B2DC83566"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -165.62,
  "hfov": 138,
  "class": "PanoramaCameraPosition",
  "pitch": 3
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Computer Lab",
 "id": "panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
 "overlays": [
  "this.overlay_35C87467_743A_1153_41CB_4136AF0FFE10",
  "this.overlay_37C1AB1E_743A_10F2_41B2_C1E07A8BBC99"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_561DA61A_7476_10F2_41B9_710871B477CF",
  "this.overlay_506C593F_747A_3332_41D4_1B4DA946C1D1",
  "this.overlay_50C72282_747A_11D2_41CE_66B88890ABFB"
 ],
 "thumbnailUrl": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_t.jpg",
 "id": "panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
 "label": "1st Floor Roundabout",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55A0234E_7416_3752_4194_2188873BB455"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_58AA1902_7486_1506_41B6_C44D348272AF",
  "this.overlay_59619E5C_748E_2F01_41C0_BB6C9B134069"
 ],
 "thumbnailUrl": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_t.jpg",
 "id": "panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
 "label": "Towards Lecture Halls",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1st Floor",
 "id": "panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
 "overlays": [
  "this.overlay_45D7EF8F_741A_2FD2_41D2_F17C9C4594EA",
  "this.overlay_45971658_741A_117E_41D0_C9075FE4B0F7",
  "this.overlay_40E05B75_741A_1736_41C1_2DFF72D76F8C",
  "this.overlay_47849FFC_7419_EF35_41C7_5F3B9B5A3A8D",
  "this.overlay_41D2E573_7416_1332_41DC_F8D3985CECDD",
  "this.overlay_42664E1C_7416_10F6_4198_3CA3C025830C",
  "this.overlay_3469A946_740A_7352_41DB_EDAEE6DDA4E7",
  "this.overlay_34193793_740A_3FF2_41C1_5F12100EF637"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55A0234E_7416_3752_4194_2188873BB455"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -92.01,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -0.83
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.68,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F016BF54_E31E_B151_41DC_D45B92A189CA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -134.1,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F0031F4E_E31E_B2B1_41B7_2BB7660170B0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -1.9,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -0.98
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 88.45,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F1E9EF37_E31E_B2DF_41D4_AE594AA2D248",
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
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Library Enterance",
 "id": "panorama_55652BE4_741A_1756_41C2_D9006945E09F",
 "overlays": [
  "this.overlay_420CB27C_740E_1136_41B5_8E6A8A021D5A",
  "this.overlay_4FBAE6BF_740E_3132_41D8_1CB873CE046A",
  "this.overlay_4958D4AA_7409_F1D2_41DA_3C1CD520C950",
  "this.overlay_4EFC36AC_740A_11D6_41B6_445DDCBE24F4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556414ED_741A_3156_4158_568C72D095C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Conference room",
 "id": "panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
 "overlays": [
  "this.overlay_6F6BED07_739E_6D0F_41CE_01FBB7934978"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera"
  },
  {
   "media": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera"
  },
  {
   "media": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera"
  },
  {
   "media": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera"
  },
  {
   "media": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera"
  },
  {
   "media": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera"
  },
  {
   "media": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera"
  },
  {
   "media": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera"
  },
  {
   "media": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera"
  },
  {
   "media": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera"
  },
  {
   "media": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera"
  },
  {
   "media": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera"
  },
  {
   "media": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera"
  },
  {
   "media": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera"
  },
  {
   "media": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera"
  },
  {
   "media": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera"
  },
  {
   "media": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera"
  },
  {
   "media": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera"
  },
  {
   "media": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera"
  },
  {
   "media": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera"
  },
  {
   "media": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera"
  },
  {
   "media": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera"
  },
  {
   "media": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera"
  },
  {
   "media": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera"
  },
  {
   "media": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera"
  },
  {
   "media": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera"
  },
  {
   "media": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera"
  },
  {
   "media": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera"
  },
  {
   "media": "this.panorama_556414ED_741A_3156_4158_568C72D095C6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_556414ED_741A_3156_4158_568C72D095C6_camera"
  },
  {
   "media": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004_camera"
  },
  {
   "media": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera"
  },
  {
   "media": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094_camera"
  },
  {
   "media": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera"
  },
  {
   "media": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera"
  },
  {
   "media": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera"
  },
  {
   "media": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera"
  },
  {
   "media": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera"
  },
  {
   "media": "this.panorama_55A0234E_7416_3752_4194_2188873BB455",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55A0234E_7416_3752_4194_2188873BB455_camera"
  },
  {
   "media": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera"
  },
  {
   "media": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 57.12,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -3.62
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "D1",
 "id": "panorama_7F53B83D_737E_3303_41D7_800E821D2255",
 "overlays": [
  "this.overlay_5E49641C_737A_1301_41DA_6DD783B633F2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 161.21,
  "class": "PanoramaCameraPosition",
  "pitch": -5.65
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1st Floor Staircase",
 "id": "panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
 "overlays": [
  "this.overlay_41A2488E_740A_11D2_41D2_0472100E2349",
  "this.overlay_43C59350_740A_174E_41D6_83D0EC5785F5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Library_3",
 "id": "panorama_55681365_741A_7756_41DB_6DE163FFE094",
 "overlays": [
  "this.overlay_497FF656_743A_3172_41B9_2C197E7BC5B4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556414ED_741A_3156_4158_568C72D095C6"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 126.53,
  "class": "PanoramaCameraPosition",
  "pitch": -3.07
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -174.55,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0.26
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_556414ED_741A_3156_4158_568C72D095C6_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Forensic Museum",
 "id": "panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
 "overlays": [
  "this.overlay_346568F1_740E_314E_41DC_9B821A651638"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 43.58,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -2.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1st Floor Left",
 "id": "panorama_55A0234E_7416_3752_4194_2188873BB455",
 "overlays": [
  "this.overlay_5C98044F_7476_3152_41C9_33960F237160",
  "this.overlay_5DE4C74F_7476_3F53_41D2_0576FC593E13"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Patio",
 "id": "panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
 "overlays": [
  "this.overlay_5F8B9A4B_738A_F707_41D3_9C89F562A59B",
  "this.overlay_5F737F8B_738A_6D07_41B3_912A47850D7A",
  "this.overlay_5B1C5656_7379_FF0E_41D4_41E4011FC267",
  "this.overlay_59BEF8BB_737A_1306_41D7_BE6B0A0E94AE",
  "this.overlay_5DE6A688_737A_1F01_41C1_7AF412E06173"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Physiology Lab ",
 "id": "panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
 "overlays": [
  "this.overlay_5091B678_738A_1F02_41D5_66735C77F911"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 139.55,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 127.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F1E4EF2A_E31E_B2F1_41EB_4AB06C9CBA41",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Library_2",
 "id": "panorama_556808CF_741A_1152_41D3_509F15D71B1F",
 "overlays": [
  "this.overlay_4FF77276_743A_3132_41CE_00130B654669"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 51.66,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 2.14
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Outside Lecture Halls",
 "id": "panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
 "overlays": [
  "this.overlay_65D39159_7416_F37E_41C2_99286C66D15A",
  "this.overlay_6688C30A_7416_10D2_4158_B5D735F405CF",
  "this.overlay_65CD16CB_741A_1153_41C7_ABAF9F487FD4",
  "this.overlay_6622E9A3_741B_F3D2_41BC_AA16C865E2FC",
  "this.overlay_6773AC54_741A_3176_41C6_9E199012C7B5"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -91.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 45.9,
   "panorama": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "distance": 1
  },
  {
   "yaw": 89.21,
   "class": "AdjacentPanorama",
   "backwardYaw": 45.9,
   "panorama": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_t.jpg",
 "hfovMax": 130
},
{
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Auditorium",
 "id": "panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
 "overlays": [
  "this.overlay_67B5F0A0_738E_1301_41CD_2E31C8CA7B3E",
  "this.overlay_6069C7B5_738E_1D03_41BB_A4F769B84525"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -14.32,
  "class": "PanoramaCameraPosition",
  "pitch": -1.03
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -134.1,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F1F82F46_E31E_B2B0_41B6_0D8CBDF9148A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -116.25,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F1E3CF31_E31E_B2D0_41E3_8D00409CB47E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.01,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 4.93
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ground FLoor Centre",
 "id": "panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
 "overlays": [
  "this.overlay_6E2300D8_738A_1301_41D5_CDA5E4B359B1",
  "this.overlay_534087FF_738A_3CFE_41D7_8E8F61E182C3",
  "this.overlay_577A75E7_7386_3D0F_41D9_D45471705A5F",
  "this.overlay_558D630C_7386_1501_41CE_55122EBC78FA",
  "this.overlay_54F5D4F7_7386_130E_41D5_FDE188BBE4BA",
  "this.overlay_5878A29C_740E_11F6_41C1_C3847C9885B0",
  "this.overlay_58442FA6_7419_EFD2_41AA_0F539FCA0BC0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -77.99,
  "class": "PanoramaCameraPosition",
  "pitch": 1.06
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Backyard",
 "id": "panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
 "overlays": [
  "this.overlay_67976942_738A_7506_41DB_DF9611AD6CC9",
  "this.overlay_6712C0A5_738A_3302_41B7_0528811FCBB5",
  "this.overlay_671D6BB6_73FA_150E_41DC_B9E06BD39783",
  "this.overlay_66931BC0_73FA_F502_41C8_6EF537E2C96C"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -33.57,
   "class": "AdjacentPanorama",
   "backwardYaw": -52.01,
   "panorama": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -0.91,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -19.81
 },
 "initialSequence": "this.sequence_5A6B855A_748A_7D06_41CA_B4933E17A6BD",
 "displayOriginPosition": {
  "yaw": -0.91,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetHfov": 123,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": -19.81
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -19.84,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -9.76
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -177.55,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0.28
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.22,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -7.25
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.68,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F018CF5A_E31E_B151_41D6_80C5A984148B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -167.48,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -1.45
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Outside Common Room",
 "id": "panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
 "overlays": [
  "this.overlay_68B6C758_743E_1F7E_41D5_8C2984335071",
  "this.overlay_55725FF3_743E_2F32_41A1_4817849C981C",
  "this.overlay_54C2D5D6_740A_3372_41C6_A2DDF7EDC759"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -29.27,
  "class": "PanoramaCameraPosition",
  "pitch": -32.67
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -108.21,
  "class": "PanoramaCameraPosition",
  "pitch": 6.3
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.12,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -0.4
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lecture Halls",
 "id": "panorama_7F4C491C_737E_F502_41D9_777494660AF3",
 "overlays": [
  "this.overlay_61D070EF_740E_1152_41C7_708067503AE4"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 87.32,
   "class": "AdjacentPanorama",
   "backwardYaw": 63.75,
   "panorama": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_t.jpg",
 "hfovMax": 139
},
{
 "initialPosition": {
  "yaw": -18.45,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -1.4
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Football Court",
 "id": "panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
 "overlays": [
  "this.overlay_6BE4C3B1_73FE_3502_41A0_4F2F1478F019",
  "this.overlay_6622AA41_73FE_3702_41C2_99AF7D908671"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -52.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -33.57,
   "panorama": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 114.57,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -8.26
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Library Reception",
 "id": "panorama_556414ED_741A_3156_4158_568C72D095C6",
 "overlays": [
  "this.overlay_4C07EB5C_740A_F776_41C8_008B1313331C",
  "this.overlay_4CB3874F_7436_3F52_41B3_1BBE0148FD24",
  "this.overlay_4F2541ED_743E_7356_41B5_CD2E86DC4016"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Executive Block",
 "id": "panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
 "overlays": [
  "this.overlay_652F66F4_738E_1F02_41CD_DA4A83530975",
  "this.overlay_68E67F8F_739A_ED1F_4181_5F549C460B81",
  "this.overlay_6ABFA57B_739A_7D06_4195_41BC1A32CAA2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Lecture hall",
 "id": "panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
 "overlays": [
  "this.overlay_6FCEE5EE_740A_1352_41C0_1D2B9FEA5C6A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 45.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -91.55,
   "panorama": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 150.11,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 4.84
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.79,
  "class": "PanoramaCameraPosition",
  "pitch": -1.81
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0.68,
  "class": "PanoramaCameraPosition",
  "pitch": -7.7
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -3.8,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": -2.79
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 45.27,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 10.09
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55A0234E_7416_3752_4194_2188873BB455_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -171.15,
  "class": "PanoramaCameraPosition",
  "pitch": -0.04
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Outside Lecture Halls Cont.",
 "id": "panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
 "overlays": [
  "this.overlay_60419F79_7416_EF3F_41C4_BCA8B8B8A714",
  "this.overlay_6CDE63FE_7416_3735_41D6_485C40824A6F",
  "this.overlay_62922FBA_7416_6F32_41AD_32787F88FEA6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 63.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.32,
   "panorama": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "distance": 1
  },
  {
   "yaw": -61.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.32,
   "panorama": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Aerial View",
 "id": "panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
 "overlays": [
  "this.overlay_7C09AF5F_739E_2D3E_41D6_77BF5E329F2B",
  "this.overlay_63C4FABF_738E_177E_41D9_41CEB60671ED",
  "this.overlay_6125401F_738A_333F_41B0_A3C09EDE79AC",
  "this.overlay_628B64ED_7386_7303_41C8_B9339F20EB6A",
  "this.overlay_66D425EB_73BA_1D06_41A5_E812C591A8E4",
  "this.overlay_6147CF2F_73BA_6D1F_41D1_3D28E070516A",
  "this.overlay_61B94B77_7386_150E_41DB_E172ED6FFD80",
  "this.overlay_618A6F00_738A_2D02_41C1_F1F2A5FA5576",
  "this.overlay_60FF7362_738E_1506_41DB_73D61F91B2A7",
  "this.overlay_62569AF1_738E_3702_41C4_72E89293626D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_t.jpg",
 "hfovMax": 129
},
{
 "initialPosition": {
  "yaw": -87.04,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -4.22
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 146.43,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_F1F1BF3E_E31E_B2D1_41CC_2420EE89D532",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Anatomy Museum",
 "id": "panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
 "overlays": [
  "this.overlay_4B156D8E_7437_F3D2_41AF_EDA112C9F0B0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55A0234E_7416_3752_4194_2188873BB455"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_t.jpg",
 "hfovMax": 138
},
{
 "initialPosition": {
  "yaw": 81.76,
  "class": "PanoramaCameraPosition",
  "pitch": -6.58
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Main Lobby",
 "id": "panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
 "overlays": [
  "this.overlay_60B32D27_7387_ED0F_41BF_603326807E99",
  "this.overlay_60C08710_7386_3D01_41D8_802DDA2ABFE7",
  "this.overlay_60055118_739A_7502_41D3_61F460BC0FA5",
  "this.overlay_6007896C_739A_1502_41CD_7FD3FE439923",
  "this.overlay_60CC96D9_739E_1F03_41D9_4C93F3692526",
  "this.overlay_60C10E25_739E_2F03_41D2_5925423BCC6E",
  "this.overlay_6020FD7C_739E_2D02_41DC_0E326E97C3E7",
  "this.overlay_682C7AE3_738A_1707_41D1_84F8F41D3156"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 167.69,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 3.37
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_60658240_7386_3702_41C8_0F6AEC5BAAD8",
  "this.overlay_6002A2BA_7386_1701_41CF_F9725C347840"
 ],
 "thumbnailUrl": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_t.jpg",
 "id": "panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
 "label": "Cafeteria",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "1st Floor Right ",
 "id": "panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
 "overlays": [
  "this.overlay_51AD1BF9_747F_F73F_41AD_0BBE8646155C",
  "this.overlay_52B411E2_747E_3352_41CF_000D4604144F",
  "this.overlay_52ECD5D0_747A_134E_41D3_D60286E1FDAA"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "rowCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4096
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Library ",
 "id": "panorama_55680E32_741A_3132_4184_DD9E6C977004",
 "overlays": [
  "this.overlay_4E4BFF96_7436_2FF5_4143_481D7EE9DEA2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": -90.47,
  "class": "PanoramaCameraPosition",
  "pitch": -0.87
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 162.88,
  "class": "PanoramaCameraPosition",
  "pitch": -1.89
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_55680E32_741A_3132_4184_DD9E6C977004_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Hallway to Lecture Halls",
 "id": "panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
 "overlays": [
  "this.overlay_66C261E4_740E_7356_41C0_B28DD484F096",
  "this.overlay_65EF23E3_740A_1752_41C7_0B8FD545F8F8",
  "this.overlay_671EBEAD_7409_F1D6_41CD_F7212C7BBA7D",
  "this.overlay_6ED66501_7436_30CE_41CE_131CE5940867",
  "this.overlay_6FA1E7F1_743A_1F4E_41BC_A1A509A3F7CE"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "Ground Floor Left Side",
 "id": "panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
 "overlays": [
  "this.overlay_6EEAD4D4_7386_1301_41D9_0A22EF4D9A39",
  "this.overlay_6DD27E2C_7386_2F01_41D4_BE5038CB86A3",
  "this.overlay_6EA0ADF9_73BA_2D03_417F_E7F51694D1E6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 146.94,
  "class": "PanoramaCameraPosition",
  "pitch": 3.98
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressRight": 0,
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowColor": "#000000",
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 0.5,
 "toolTipTextShadowColor": "#000000",
 "toolTipFontSize": 13,
 "playbackBarBottom": 5,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingBottom": 7,
 "playbackBarBackgroundOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "borderSize": 0,
 "progressLeft": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressOpacity": 1,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "toolTipFontFamily": "Georgia",
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressBarOpacity": 1,
 "progressBarBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressBackgroundOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressHeight": 10,
 "top": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarLeft": 0,
 "playbackBarHeadWidth": 6,
 "progressBottom": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "width": 330,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "gap": 10,
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--INFO photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "gap": 10,
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "gap": 10,
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--LOCATION"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "gap": 10,
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0.6,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "gap": 10,
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--REALTOR"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "1.61%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "width": 58,
 "top": "2.43%",
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "height": 58,
 "transparencyActive": true,
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.32,
   "yaw": 154.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.72
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB68C7EE_E2FF_9171_41B0_A98F26FE318F",
   "pitch": -9.72,
   "hfov": 10.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154.78,
   "distance": 100
  }
 ],
 "id": "overlay_53B56F5B_747B_EF72_41C8_D7AC8F46C7E0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.36,
   "yaw": 105.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.49
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F76AE6FB_E2E9_9357_41DC_54C06ECD171B",
   "pitch": -13.49,
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.51,
   "distance": 100
  }
 ],
 "id": "overlay_65352748_738A_1D01_41B1_EB7BB12CF284",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.21,
   "yaw": -8.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.57
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7737E5_E2FF_9173_41E0_6EB2F21EB870",
   "pitch": -14.57,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -8.58,
   "distance": 50
  }
 ],
 "id": "overlay_52E23B1C_738A_3502_41D3_C40C081FAA7F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.53,
   "yaw": 57.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.15
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_FB70A7E5_E2FF_9173_41EA_8FA68C3B867B",
   "pitch": -36.15,
   "hfov": 14.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 57.78,
   "distance": 100
  }
 ],
 "id": "overlay_520109A8_738E_1501_41C6_A9AEC2763674",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.86,
   "yaw": 59.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_2_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.69
  }
 ],
 "data": {
  "label": "Physiology LAB"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_2_0.png",
      "width": 448,
      "class": "ImageResourceLevel",
      "height": 99
     }
    ]
   },
   "pitch": -44.69,
   "hfov": 17.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 59.23,
   "distance": 50
  }
 ],
 "id": "overlay_5239DBD0_738E_3502_41AB_A531B954A028",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.85,
   "yaw": 131.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.4
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7A17E9_E2FF_9173_41D7_0842B47ED8AA",
   "pitch": -38.4,
   "hfov": 19.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 131.09,
   "distance": 100
  }
 ],
 "id": "overlay_6A0DF7AA_743A_1FD2_419B_2B827CCEBA3D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 26.4,
   "yaw": 52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.06
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB7C07E7_E2FF_917F_41E7_B01550F7F132",
   "pitch": -26.06,
   "hfov": 26.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 52,
   "distance": 100
  }
 ],
 "id": "overlay_58ECBF1A_737E_6D01_41DB_493201319C26",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.75,
   "yaw": -3.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.87
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7287E6_E2FF_9171_41D0_E7B4F793C879",
   "pitch": -10.87,
   "hfov": 12.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.03,
   "distance": 50
  }
 ],
 "id": "overlay_52BD4931_73BA_3502_41B0_C503ABBE27BD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.5,
   "yaw": 38.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.56
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB6847EE_E2FF_9171_41E6_A9C16D0F3D05",
   "pitch": -6.56,
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 38.75,
   "distance": 100
  }
 ],
 "id": "overlay_5CCF0547_747A_1353_41B4_133B2DC83566",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.03,
   "yaw": 5.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.28
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6297EC_E2FF_9171_41D4_759C530EDF0F",
   "pitch": 0.28,
   "hfov": 19.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.25,
   "distance": 50
  }
 ],
 "id": "overlay_35C87467_743A_1153_41CB_4136AF0FFE10",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.53,
   "yaw": 19.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_1_HS_1_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.49
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_1_HS_1_0.png",
      "width": 277,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -3.49,
   "hfov": 15.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 19.26,
   "distance": 50
  }
 ],
 "id": "overlay_37C1AB1E_743A_10F2_41B2_C1E07A8BBC99",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.68,
   "yaw": 3.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -14.86
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.68,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_0_0.png",
      "width": 230,
      "class": "ImageResourceLevel",
      "height": 258
     }
    ]
   },
   "pitch": -14.86,
   "yaw": 3.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_561DA61A_7476_10F2_41B9_710871B477CF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.85,
   "yaw": -84.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.39
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_478E6D5D_740A_1376_41D7_D68E2D935592",
   "pitch": -17.39,
   "hfov": 9.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.04,
   "distance": 100
  }
 ],
 "id": "overlay_506C593F_747A_3332_41D4_1B4DA946C1D1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.47,
   "yaw": 88.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.1
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_478DFD5D_740A_1376_41C0_D5506679CFF5",
   "pitch": -14.1,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.7,
   "distance": 100
  }
 ],
 "id": "overlay_50C72282_747A_11D2_41CE_66B88890ABFB",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 31.96,
   "yaw": -93.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.67
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7C57E7_E2FF_917F_41A5_AFD5CB44E077",
   "pitch": -31.67,
   "hfov": 31.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -93.63,
   "distance": 100
  }
 ],
 "id": "overlay_58AA1902_7486_1506_41B6_C44D348272AF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 92.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.74
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB7DB7E7_E2FF_917F_41B9_A8F30435F476",
   "pitch": -15.74,
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.15,
   "distance": 100
  }
 ],
 "id": "overlay_59619E5C_748E_2F01_41C0_BB6C9B134069",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.4,
   "yaw": -60.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.11
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BACK TO GROUND FLOOR",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6247EC_E2FF_9171_41E8_80CAA55C4BE0",
   "pitch": -23.11,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -60.26,
   "distance": 100
  }
 ],
 "id": "overlay_45D7EF8F_741A_2FD2_41D2_F17C9C4594EA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.85,
   "yaw": -169.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.67
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
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
   "image": "this.AnimatedImageResource_FB63B7ED_E2FF_9173_41D3_507A21AF5C37",
   "pitch": -19.67,
   "hfov": 16.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.02,
   "distance": 50
  }
 ],
 "id": "overlay_45971658_741A_117E_41D0_C9075FE4B0F7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.49,
   "yaw": 46.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6347ED_E2FF_9173_41DF_5492091DA542",
   "pitch": -14,
   "hfov": 18.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 46.93,
   "distance": 50
  }
 ],
 "id": "overlay_40E05B75_741A_1736_41C1_2DFF72D76F8C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.53,
   "yaw": 116.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.5
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 28.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_3_0.png",
      "width": 529,
      "class": "ImageResourceLevel",
      "height": 488
     }
    ]
   },
   "pitch": 15.5,
   "yaw": 116.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47849FFC_7419_EF35_41C7_5F3B9B5A3A8D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.15,
   "yaw": -122.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.91
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6DB7ED_E2FF_9173_41E0_C2211701B9BA",
   "pitch": -13.91,
   "hfov": 16.15,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -122.66,
   "distance": 50
  }
 ],
 "id": "overlay_41D2E573_7416_1332_41DC_F8D3985CECDD",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.17,
   "yaw": -1.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.46
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6D37ED_E2FF_9173_41E4_8F4A84137292",
   "pitch": -11.46,
   "hfov": 15.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.88,
   "distance": 50
  }
 ],
 "id": "overlay_42664E1C_7416_10F6_4198_3CA3C025830C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.82,
   "yaw": -36.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "pitch": 5.96
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_6_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 182
     }
    ]
   },
   "pitch": 5.96,
   "yaw": -36.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3469A946_740A_7352_41DB_EDAEE6DDA4E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.48,
   "yaw": -31.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_7_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.26
  }
 ],
 "data": {
  "label": "Forensic Museum"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_7_0.png",
      "width": 348,
      "class": "ImageResourceLevel",
      "height": 78
     }
    ]
   },
   "pitch": 0.26,
   "hfov": 19.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -31.88,
   "distance": 50
  }
 ],
 "id": "overlay_34193793_740A_3FF2_41C1_5F12100EF637",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.48,
   "yaw": -118.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.74
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB66A7EB_E2FF_9177_41C7_CC2520605239",
   "pitch": -16.74,
   "hfov": 15.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -118.75,
   "distance": 50
  }
 ],
 "id": "overlay_420CB27C_740E_1136_41B5_8E6A8A021D5A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.02,
   "yaw": -90.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.64
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6627EB_E2FF_9177_41D1_D45030F7B167",
   "pitch": -5.64,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.11,
   "distance": 100
  }
 ],
 "id": "overlay_4FBAE6BF_740E_3132_41D8_1CB873CE046A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.55,
   "yaw": 108.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.25
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6787EB_E2FF_9177_41E2_27B0C320FE74",
   "pitch": -10.25,
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 108.18,
   "distance": 50
  }
 ],
 "id": "overlay_4958D4AA_7409_F1D2_41DA_3C1CD520C950",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.99,
   "yaw": 114.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_3_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.4
  }
 ],
 "data": {
  "label": "Computer Lab"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_3_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ]
   },
   "pitch": -14.4,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.08,
   "distance": 50
  }
 ],
 "id": "overlay_4EFC36AC_740A_11D6_41B6_445DDCBE24F4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.06,
   "yaw": -71.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.05
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_537197C8_739B_FD02_41B8_74017C96091D",
   "pitch": -29.05,
   "hfov": 21.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -71.32,
   "distance": 50
  }
 ],
 "id": "overlay_6F6BED07_739E_6D0F_41CE_01FBB7934978",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.36,
   "yaw": 74.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.56
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_FB7377E6_E2FF_9171_41D5_8A807B459C2C",
   "pitch": -28.56,
   "hfov": 19.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.38,
   "distance": 100
  }
 ],
 "id": "overlay_5E49641C_737A_1301_41DA_6DD783B633F2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.37,
   "yaw": -10.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.02
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB65B7EA_E2FF_9171_41E3_48B39A806828",
   "pitch": -12.02,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -10.19,
   "distance": 100
  }
 ],
 "id": "overlay_41A2488E_740A_11D2_41D2_0472100E2349",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.03,
   "yaw": -107.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.21
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6527EA_E2FF_9171_417C_572F35DFCA30",
   "pitch": -20.21,
   "hfov": 23.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -107.18,
   "distance": 50
  }
 ],
 "id": "overlay_43C59350_740A_174E_41D6_83D0EC5785F5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.46,
   "yaw": -36.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.51
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6137EC_E2FF_9171_41DF_03FAC3C6CBFB",
   "pitch": -9.51,
   "hfov": 18.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -36.55,
   "distance": 100
  }
 ],
 "id": "overlay_497FF656_743A_3172_41B9_2C197E7BC5B4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.27,
   "yaw": 33.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.92
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6A47EF_E2FF_914F_41CF_984C0CBFFFB8",
   "pitch": -9.92,
   "hfov": 13.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.54,
   "distance": 50
  }
 ],
 "id": "overlay_346568F1_740E_314E_41DC_9B821A651638",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.16,
   "yaw": -22.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.03
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB69D7EF_E2FF_914F_41E7_90791ED9D5E4",
   "pitch": -18.03,
   "hfov": 18.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -22.99,
   "distance": 100
  }
 ],
 "id": "overlay_5C98044F_7476_3152_41C9_33960F237160",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.04,
   "yaw": 67.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.17
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6937EF_E2FF_914F_41CC_629ECC6B22BB",
   "pitch": -53.17,
   "hfov": 21.04,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.27,
   "distance": 100
  }
 ],
 "id": "overlay_5DE4C74F_7476_3F53_41D2_0576FC593E13",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.64,
   "yaw": -43.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.13
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5FD9A4B5_737E_3302_419B_52FB8B8912F5",
   "pitch": -14.13,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.76,
   "distance": 50
  }
 ],
 "id": "overlay_5F8B9A4B_738A_F707_41D3_9C89F562A59B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.99,
   "yaw": 42.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.67
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5FD974B5_737E_3302_41D5_7AF608613B16",
   "pitch": -12.67,
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 42.09,
   "distance": 50
  }
 ],
 "id": "overlay_5F737F8B_738A_6D07_41B3_912A47850D7A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.76,
   "yaw": 118.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.18
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
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
   "image": "this.AnimatedImageResource_5FD904B5_737E_3302_41C1_205DDA0A5682",
   "pitch": -22.18,
   "hfov": 13.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 118.8,
   "distance": 50
  }
 ],
 "id": "overlay_5B1C5656_7379_FF0E_41D4_41E4011FC267",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": -121.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.58
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5FD924B5_737E_3302_4193_5DD8B6378E3E",
   "pitch": -24.58,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -121.84,
   "distance": 50
  }
 ],
 "id": "overlay_59BEF8BB_737A_1306_41D7_BE6B0A0E94AE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.8,
   "yaw": -179.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.9
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_47AC4E05_748E_EF02_41C9_DDCC954BAD6B",
   "pitch": -17.9,
   "hfov": 9.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.22,
   "distance": 100
  }
 ],
 "id": "overlay_5DE6A688_737A_1F01_41C1_7AF412E06173",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.18,
   "yaw": -150.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.68
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7107E6_E2FF_9171_41C4_541C286A91FF",
   "pitch": -12.68,
   "hfov": 13.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -150.95,
   "distance": 50
  }
 ],
 "id": "overlay_5091B678_738A_1F02_41D5_66735C77F911",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.18,
   "yaw": -145,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.18
  }
 ],
 "data": {
  "label": "Arrow 06b Left"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48AB4569_743F_F35E_41DC_1742DC71DEFF",
   "pitch": -2.18,
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -145,
   "distance": 50
  }
 ],
 "id": "overlay_4FF77276_743A_3132_41CE_00130B654669",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10,
   "yaw": -91.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.14
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1, this.camera_F1F82F46_E31E_B2B0_41B6_0D8CBDF9148A); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7F37E8_E2FF_9171_41E6_DEC2C3B014A4",
   "pitch": -15.14,
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -91.55,
   "distance": 100
  }
 ],
 "id": "overlay_65D39159_7416_F37E_41C2_99286C66D15A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.21,
   "yaw": -87.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.84
  }
 ],
 "data": {
  "label": "Lecture Hall"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_1_0.png",
      "width": 345,
      "class": "ImageResourceLevel",
      "height": 62
     }
    ]
   },
   "pitch": -19.84,
   "hfov": 18.21,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -87.26,
   "distance": 50
  }
 ],
 "id": "overlay_6688C30A_7416_10D2_4158_B5D735F405CF",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.8,
   "yaw": 89.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.93
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1, this.camera_F0031F4E_E31E_B2B1_41B7_2BB7660170B0); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB78C7E8_E2FF_9171_41E9_882DF8658BCF",
   "pitch": -13.93,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.21,
   "distance": 100
  }
 ],
 "id": "overlay_65CD16CB_741A_1153_41C7_ABAF9F487FD4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.9,
   "yaw": 96.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_3_0_map.gif",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ],
 "data": {
  "label": "Lecture Hall"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_3_0.png",
      "width": 447,
      "class": "ImageResourceLevel",
      "height": 70
     }
    ]
   },
   "pitch": -17.72,
   "hfov": 23.9,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.61,
   "distance": 50
  }
 ],
 "id": "overlay_6622E9A3_741B_F3D2_41BC_AA16C865E2FC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.71,
   "yaw": 1.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.16
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7857E8_E2FF_9171_41E1_657B678DA206",
   "pitch": -26.16,
   "hfov": 22.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.28,
   "distance": 100
  }
 ],
 "id": "overlay_6773AC54_741A_3176_41C6_9E199012C7B5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.89,
   "yaw": 15.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0_HS_0_0_map.gif",
      "width": 104,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -21.51
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0_HS_0_0.png",
      "width": 1285,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -21.51,
   "hfov": 35.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 15.32,
   "distance": 50
  }
 ],
 "id": "overlay_67B5F0A0_738E_1301_41CD_2E31C8CA7B3E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.39,
   "yaw": 0.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.16
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
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
   "image": "this.AnimatedImageResource_5AE7F5C6_7EDA_39FE_41C2_51DD52FA9AF3",
   "pitch": -28.16,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.46,
   "distance": 100
  }
 ],
 "id": "overlay_6069C7B5_738E_1D03_41BB_A4F769B84525",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.67,
   "yaw": 173.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.39
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511BB363_73BE_1506_41D1_EB2616C4E921",
   "pitch": -7.39,
   "hfov": 16.67,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.37,
   "distance": 50
  }
 ],
 "id": "overlay_6E2300D8_738A_1301_41D5_CDA5E4B359B1",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": -73.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.84
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511B4363_73BE_1506_41A7_D2CF45E9DA92",
   "pitch": -15.84,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -73.12,
   "distance": 50
  }
 ],
 "id": "overlay_534087FF_738A_3CFE_41D7_8E8F61E182C3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.16,
   "yaw": 74.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.03
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5749D20A_7386_F706_41C1_3574BBAC57CF",
   "pitch": -12.03,
   "hfov": 9.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.78,
   "distance": 50
  }
 ],
 "id": "overlay_577A75E7_7386_3D0F_41D9_D45471705A5F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.75,
   "yaw": -22.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.79
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Patio",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_4743F7CC_741E_3F56_41C4_7E781387D881",
   "pitch": -7.79,
   "hfov": 7.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -22.14,
   "distance": 50
  }
 ],
 "id": "overlay_558D630C_7386_1501_41CE_55122EBC78FA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 6.54,
   "yaw": 22.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.52
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Patio",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_474267CC_741E_3F56_41BE_0B5C2B45C56C",
   "pitch": -7.52,
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.41,
   "distance": 50
  }
 ],
 "id": "overlay_54F5D4F7_7386_130E_41D5_FDE188BBE4BA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.27,
   "yaw": -0.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_5_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.89
  }
 ],
 "data": {
  "label": "Arrow 04a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_474D07CC_741E_3F56_41DC_4326A2A76053",
   "pitch": 3.89,
   "hfov": 13.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.01,
   "distance": 100
  }
 ],
 "id": "overlay_5878A29C_740E_11F6_41C1_C3847C9885B0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.83,
   "yaw": -1.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ]
   },
   "pitch": 56.42
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_6_0.png",
      "width": 1134,
      "class": "ImageResourceLevel",
      "height": 1379
     }
    ]
   },
   "pitch": 56.42,
   "yaw": -1.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_58442FA6_7419_EFD2_41AA_0F539FCA0BC0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.56,
   "yaw": 89.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.38
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_65926855_73FA_1303_41C1_F80EB26EDC58",
   "pitch": -12.38,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.98,
   "distance": 100
  }
 ],
 "id": "overlay_67976942_738A_7506_41DB_DF9611AD6CC9",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.06,
   "yaw": 93.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_1_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.24
  }
 ],
 "data": {
  "label": "Main Enterance"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_1_0.png",
      "width": 630,
      "class": "ImageResourceLevel",
      "height": 122
     }
    ]
   },
   "pitch": -17.24,
   "hfov": 18.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.7,
   "distance": 50
  }
 ],
 "id": "overlay_6712C0A5_738A_3302_41B7_0528811FCBB5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": -33.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.48
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303, this.camera_F1E4EF2A_E31E_B2F1_41EB_4AB06C9CBA41); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_65921855_73FA_1303_41DB_14CB86643E93",
   "pitch": -8.48,
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.57,
   "distance": 100
  }
 ],
 "id": "overlay_671D6BB6_73FA_150E_41DC_B9E06BD39783",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 38.56,
   "yaw": -18.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_3_0_map.gif",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.92
  }
 ],
 "data": {
  "label": "Football Court"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_3_0.png",
      "width": 1308,
      "class": "ImageResourceLevel",
      "height": 105
     }
    ]
   },
   "pitch": -10.92,
   "hfov": 38.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -18.9,
   "distance": 50
  }
 ],
 "id": "overlay_66931BC0_73FA_F502_41C8_6EF537E2C96C",
 "class": "HotspotPanoramaOverlay"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 19.2,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 321.6,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 19.2,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_5A6B855A_748A_7D06_41CA_B4933E17A6BD",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.35,
   "yaw": 92.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.09
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB79C7E8_E2FF_9171_41EA_62522210ECE2",
   "pitch": -20.09,
   "hfov": 17.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 92.74,
   "distance": 100
  }
 ],
 "id": "overlay_68B6C758_743E_1F7E_41D5_8C2984335071",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.54,
   "yaw": 147.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.33
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7947E8_E2FF_9171_41E2_92CB4682D733",
   "pitch": -41.33,
   "hfov": 18.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 147.44,
   "distance": 50
  }
 ],
 "id": "overlay_55725FF3_743E_2F32_41A1_4817849C981C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.91,
   "yaw": 7.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "up",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7AB7E9_E2FF_9173_41D4_C70CAFA395EA",
   "pitch": -6.26,
   "hfov": 25.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.63,
   "distance": 100
  }
 ],
 "id": "overlay_54C2D5D6_740A_3372_41C6_A2DDF7EDC759",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.49,
   "yaw": 87.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.41
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9, this.camera_F1E3CF31_E31E_B2D0_41E3_8D00409CB47E); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EEEF4FD_740E_1136_41BB_8C88B15C2DD6",
   "pitch": -11.41,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.32,
   "distance": 50
  }
 ],
 "id": "overlay_61D070EF_740E_1152_41C7_708067503AE4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.18,
   "yaw": -52.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.25
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B, this.camera_F1F1BF3E_E31E_B2D1_41CC_2420EE89D532); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B89D2E9_7EDE_3BB3_4185_1217A1F8D082",
   "pitch": -12.25,
   "hfov": 20.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -52.01,
   "distance": 50
  }
 ],
 "id": "overlay_6BE4C3B1_73FE_3502_41A0_4F2F1478F019",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.86,
   "yaw": -51.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0_HS_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.85
  }
 ],
 "data": {
  "label": "Backyard"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0_HS_1_0.png",
      "width": 831,
      "class": "ImageResourceLevel",
      "height": 234
     }
    ]
   },
   "pitch": -16.85,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -51.77,
   "distance": 50
  }
 ],
 "id": "overlay_6622AA41_73FE_3702_41C2_99AF7D908671",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.62,
   "yaw": 96.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.6
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6747EB_E2FF_9177_41D7_FD25095952A0",
   "pitch": -15.6,
   "hfov": 21.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 96.91,
   "distance": 50
  }
 ],
 "id": "overlay_4C07EB5C_740A_F776_41C8_008B1313331C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.35,
   "yaw": -102.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.06
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB60C7EB_E2FF_9177_41D0_A487C13FA59E",
   "pitch": -15.06,
   "hfov": 22.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.97,
   "distance": 50
  }
 ],
 "id": "overlay_4CB3874F_7436_3F52_41B3_1BBE0148FD24",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.13,
   "yaw": 114.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_2_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.54
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_2_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": -15.54,
   "hfov": 15.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 114.75,
   "distance": 50
  }
 ],
 "id": "overlay_4F2541ED_743E_7356_41B5_CD2E86DC4016",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.94,
   "yaw": -169.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.79
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0A1F9B8_E2EA_91D0_41C3_05E4BFFF1772",
   "pitch": -19.79,
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -169.87,
   "distance": 100
  }
 ],
 "id": "overlay_652F66F4_738E_1F02_41CD_DA4A83530975",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.73,
   "yaw": -16.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.15
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F0A039B8_E2EA_91D0_417E_4972BBEBB61B",
   "pitch": -13.15,
   "hfov": 10.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -16.75,
   "distance": 50
  }
 ],
 "id": "overlay_68E67F8F_739A_ED1F_4181_5F549C460B81",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.78,
   "yaw": -5.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_2_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.77
  }
 ],
 "data": {
  "label": "Conference Hall"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_2_0.png",
      "width": 645,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": 15.77,
   "hfov": 34.78,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -5.3,
   "distance": 50
  }
 ],
 "id": "overlay_6ABFA57B_739A_7D06_4195_41BC1A32CAA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 45.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.95
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1, this.camera_F1E9EF37_E31E_B2DF_41D4_AE594AA2D248); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_699A56A1_7436_31CE_41D7_8A91E530DBCB",
   "pitch": -11.95,
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 45.9,
   "distance": 50
  }
 ],
 "id": "overlay_6FCEE5EE_740A_1352_41C0_1D2B9FEA5C6A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.71,
   "yaw": 0.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.74
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7A77E9_E2FF_9173_41C8_C8CC99C8B10B",
   "pitch": -19.74,
   "hfov": 10.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.4,
   "distance": 100
  }
 ],
 "id": "overlay_60419F79_7416_EF3F_41C4_BCA8B8B8A714",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.82,
   "yaw": 63.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4C491C_737E_F502_41D9_777494660AF3, this.camera_F016BF54_E31E_B151_41DC_D45B92A189CA); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7BE7E9_E2FF_9173_41EB_BA7F5495FBA4",
   "pitch": -15.76,
   "hfov": 10.82,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63.75,
   "distance": 50
  }
 ],
 "id": "overlay_6CDE63FE_7416_3735_41D6_485C40824A6F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.51,
   "yaw": -61.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.94
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4C491C_737E_F502_41D9_777494660AF3, this.camera_F018CF5A_E31E_B151_41D6_80C5A984148B); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7B37E9_E2FF_9173_41E3_438ECE22E617",
   "pitch": -17.94,
   "hfov": 10.51,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -61.25,
   "distance": 50
  }
 ],
 "id": "overlay_62922FBA_7416_6F32_41AD_32787F88FEA6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.56,
   "yaw": 1.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.3
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B84E2E8_7EDE_3BB1_41D8_445EFD3C587A",
   "pitch": -32.3,
   "hfov": 10.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.79,
   "distance": 100
  }
 ],
 "id": "overlay_7C09AF5F_739E_2D3E_41D6_77BF5E329F2B",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.96,
   "yaw": -43.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.07
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Auditorium",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B8BF2E8_7EDE_3BB1_41D6_6A7A33061626",
   "pitch": -28.07,
   "hfov": 8.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.13,
   "distance": 50
  }
 ],
 "id": "overlay_63C4FABF_738E_177E_41D9_41CEB60671ED",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.28,
   "yaw": -58.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_2_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.2
  }
 ],
 "data": {
  "label": "CAFETERIA"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_2_0.png",
      "width": 292,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -19.2,
   "hfov": 8.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.66,
   "distance": 50
  }
 ],
 "id": "overlay_6125401F_738A_333F_41B0_A3C09EDE79AC",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.76,
   "yaw": 2.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_3_0_map.gif",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.03
  }
 ],
 "data": {
  "label": "MAIN ENTERENCE"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_3_0.png",
      "width": 624,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -38.03,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.36,
   "distance": 50
  }
 ],
 "id": "overlay_628B64ED_7386_7303_41C8_B9339F20EB6A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.38,
   "yaw": -63.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_4_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.25
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
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
   "image": "this.AnimatedImageResource_5B8B42E9_7EDE_3BB3_41C5_D4F4B5723319",
   "pitch": -23.25,
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -63.84,
   "distance": 50
  }
 ],
 "id": "overlay_66D425EB_73BA_1D06_41A5_E812C591A8E4",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.62,
   "yaw": -44.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_5_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.65
  }
 ],
 "data": {
  "label": "AUDITORIUM"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_5_0.png",
      "width": 316,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ]
   },
   "pitch": -24.65,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -44.9,
   "distance": 50
  }
 ],
 "id": "overlay_6147CF2F_73BA_6D1F_41D1_3D28E070516A",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.18,
   "yaw": 33.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_1_HS_6_0_map.gif",
      "width": 70,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.4
  }
 ],
 "data": {
  "label": "Football Court"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_1_HS_6_0.png",
      "width": 381,
      "class": "ImageResourceLevel",
      "height": 87
     }
    ]
   },
   "pitch": -12.4,
   "hfov": 11.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.97,
   "distance": 50
  }
 ],
 "id": "overlay_61B94B77_7386_150E_41DB_E172ED6FFD80",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.08,
   "yaw": 33.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_7_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.61
  }
 ],
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B8A12E9_7EDE_3BB3_41AB_81B7FA842F50",
   "pitch": -9.61,
   "hfov": 13.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.56,
   "distance": 50
  }
 ],
 "id": "overlay_618A6F00_738A_2D02_41C1_F1F2A5FA5576",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.55,
   "yaw": 49.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_8_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.92
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5B8A62E9_7EDE_3BB3_41D1_D827034D296C",
   "pitch": -22.92,
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.14,
   "distance": 50
  }
 ],
 "id": "overlay_60FF7362_738E_1506_41DB_73D61F91B2A7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.79,
   "yaw": 56.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_9_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.72
  }
 ],
 "data": {
  "label": "Backyard "
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_9_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 100
     }
    ]
   },
   "pitch": -24.72,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 56.36,
   "distance": 50
  }
 ],
 "id": "overlay_62569AF1_738E_3702_41C4_72E89293626D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.88,
   "yaw": 74.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.03
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6AC7EF_E2FF_914F_41E3_731B1ED166C2",
   "pitch": -24.03,
   "hfov": 22.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.2,
   "distance": 100
  }
 ],
 "id": "overlay_4B156D8E_7437_F3D2_41AF_EDA112C9F0B0",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 18.13,
   "yaw": 2.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.96
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_658DB856_73FA_1301_4191_007BCF33A521",
   "pitch": -12.96,
   "hfov": 18.13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.37,
   "distance": 100
  }
 ],
 "id": "overlay_60B32D27_7387_ED0F_41BF_603326807E99",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.23,
   "yaw": 7.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.43
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_1_0.png",
      "width": 570,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "pitch": -18.43,
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.76,
   "distance": 50
  }
 ],
 "id": "overlay_60C08710_7386_3D01_41D8_802DDA2ABFE7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.68,
   "yaw": -90.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.15
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658D1856_73FA_1301_4190_856B09C68960",
   "pitch": -34.15,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.69,
   "distance": 100
  }
 ],
 "id": "overlay_60055118_739A_7502_41D3_61F460BC0FA5",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.81,
   "yaw": -85.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_3_0_map.gif",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.51
  }
 ],
 "data": {
  "label": "Executive Block"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_3_0.png",
      "width": 956,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": -40.51,
   "hfov": 21.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.26,
   "distance": 50
  }
 ],
 "id": "overlay_6007896C_739A_1502_41CD_7FD3FE439923",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.68,
   "yaw": -90.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_4_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.15
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_658CB856_73FA_1301_41D0_4018981866BA",
   "pitch": -34.15,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.69,
   "distance": 100
  }
 ],
 "id": "overlay_60CC96D9_739E_1F03_41D9_4C93F3692526",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13,
   "yaw": 93.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.89
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_658C7856_73FA_1301_41D8_BAAF9FB8A686",
   "pitch": -31.89,
   "hfov": 13,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 93.06,
   "distance": 100
  }
 ],
 "id": "overlay_60C10E25_739E_2F03_41D2_5925423BCC6E",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 40.24,
   "yaw": 111.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_6_0_map.gif",
      "width": 176,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.24
  }
 ],
 "data": {
  "label": "Admin Block"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_6_0.png",
      "width": 1707,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "pitch": -38.24,
   "hfov": 40.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 111.86,
   "distance": 50
  }
 ],
 "id": "overlay_6020FD7C_739E_2D02_41DC_0E326E97C3E7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.7,
   "yaw": -178.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_7_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.21
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_511A2363_73BE_1507_41B0_927AAFAB7F41",
   "pitch": -18.21,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -178.16,
   "distance": 100
  }
 ],
 "id": "overlay_682C7AE3_738A_1707_41D1_84F8F41D3156",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 12.11,
   "yaw": 1.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0_HS_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.39
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0_HS_0_0.png",
      "width": 416,
      "class": "ImageResourceLevel",
      "height": 205
     }
    ]
   },
   "pitch": -14.39,
   "hfov": 12.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.66,
   "distance": 50
  }
 ],
 "id": "overlay_60658240_7386_3702_41C8_0F6AEC5BAAD8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.49,
   "yaw": -0.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.34
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
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
   "image": "this.AnimatedImageResource_65914855_73FA_1303_41C4_F10E3A7D9A07",
   "pitch": -8.34,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.77,
   "distance": 100
  }
 ],
 "id": "overlay_6002A2BA_7386_1701_41CF_F9725C347840",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.43,
   "yaw": 84.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.34
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6E47EE_E2FF_9171_41E1_1C38C5F93FAC",
   "pitch": -18.34,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 84.78,
   "distance": 100
  }
 ],
 "id": "overlay_51AD1BF9_747F_F73F_41AD_0BBE8646155C",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.46,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.77
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB6FB7EE_E2FF_9171_41EC_52B0AC9D6C25",
   "pitch": -36.77,
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.38,
   "distance": 100
  }
 ],
 "id": "overlay_52B411E2_747E_3352_41CF_000D4604144F",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.18,
   "yaw": -156.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -61.71
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB6F37EE_E2FF_9171_41E1_70874FE11D5E",
   "pitch": -61.71,
   "hfov": 14.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -156.79,
   "distance": 50
  }
 ],
 "id": "overlay_52ECD5D0_747A_134E_41D3_D60286E1FDAA",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.93,
   "yaw": 161.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.82
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_48AB6569_743F_F35E_41C4_DD2560FF0F46",
   "pitch": -4.82,
   "hfov": 19.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 161.21,
   "distance": 50
  }
 ],
 "id": "overlay_4E4BFF96_7436_2FF5_4143_481D7EE9DEA2",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": -34.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.84
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
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
   "image": "this.AnimatedImageResource_FB7D17E7_E2FF_917F_41BE_DCD1023115DB",
   "pitch": -10.84,
   "hfov": 17.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -34.74,
   "distance": 50
  }
 ],
 "id": "overlay_66C261E4_740E_7356_41C0_B28DD484F096",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.39,
   "yaw": 36.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.96
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
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
   "image": "this.AnimatedImageResource_FB7E87E7_E2FF_917F_4188_55B76BE138BF",
   "pitch": -10.96,
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 36.5,
   "distance": 50
  }
 ],
 "id": "overlay_65EF23E3_740A_1752_41C7_0B8FD545F8F8",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.88,
   "yaw": 172.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.21
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7EF7E7_E2FF_917F_41C0_0F261E2DEF53",
   "pitch": -16.21,
   "hfov": 19.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 172.41,
   "distance": 100
  }
 ],
 "id": "overlay_671EBEAD_7409_F1D6_41CD_F7212C7BBA7D",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.86,
   "yaw": -90.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.53
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
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
   "image": "this.AnimatedImageResource_FB7E57E7_E2FF_917F_41E6_1DCDCD498C76",
   "pitch": -10.53,
   "hfov": 11.86,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -90.49,
   "distance": 100
  }
 ],
 "id": "overlay_6ED66501_7436_30CE_41CE_131CE5940867",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.33,
   "yaw": 89.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7FD7E7_E2FF_917F_41E3_4BBBA4471B4F",
   "pitch": -17.72,
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.82,
   "distance": 100
  }
 ],
 "id": "overlay_6FA1E7F1_743A_1F4E_41BC_A1A509A3F7CE",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 11.73,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.9
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB7017E5_E2FF_9173_41E7_534A3DA37240",
   "pitch": -10.9,
   "hfov": 11.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.75,
   "distance": 100
  }
 ],
 "id": "overlay_6EEAD4D4_7386_1301_41D9_0A22EF4D9A39",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 32.84,
   "yaw": -78.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_1_0_map.gif",
      "width": 107,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.61
  }
 ],
 "data": {
  "label": "BIOCHEMISTRY LAB"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_1_0.png",
      "width": 924,
      "class": "ImageResourceLevel",
      "height": 138
     }
    ]
   },
   "pitch": -50.61,
   "hfov": 32.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -78.57,
   "distance": 50
  }
 ],
 "id": "overlay_6DD27E2C_7386_2F01_41D4_BE5038CB86A3",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.37,
   "yaw": -88.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.01
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FB71B7E6_E2FF_9171_41C4_C4650A4749C3",
   "pitch": -39.01,
   "hfov": 16.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.89,
   "distance": 100
  }
 ],
 "id": "overlay_6EA0ADF9_73BA_2D03_417F_E7F51694D1E6",
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "width": 66,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "width": 330,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "10%",
 "shadowBlurRadius": 25,
 "shadowSpread": 1,
 "bottom": "10%",
 "shadowVerticalLength": 0,
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": true,
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 20,
 "minHeight": 1,
 "right": "15%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "top": "10%",
 "bottom": "80%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 20,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB68C7EE_E2FF_9171_41B0_A98F26FE318F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F76AE6FB_E2E9_9357_41DC_54C06ECD171B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7737E5_E2FF_9173_41E0_6EB2F21EB870",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB70A7E5_E2FF_9173_41EA_8FA68C3B867B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7A17E9_E2FF_9173_41D7_0842B47ED8AA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7C07E7_E2FF_917F_41E7_B01550F7F132",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7287E6_E2FF_9171_41D0_E7B4F793C879",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6847EE_E2FF_9171_41E6_A9C16D0F3D05",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6297EC_E2FF_9171_41D4_759C530EDF0F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_478E6D5D_740A_1376_41D7_D68E2D935592",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_478DFD5D_740A_1376_41C0_D5506679CFF5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7C57E7_E2FF_917F_41A5_AFD5CB44E077",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7DB7E7_E2FF_917F_41B9_A8F30435F476",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6247EC_E2FF_9171_41E8_80CAA55C4BE0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB63B7ED_E2FF_9173_41D3_507A21AF5C37",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6347ED_E2FF_9173_41DF_5492091DA542",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6DB7ED_E2FF_9173_41E0_C2211701B9BA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_1_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6D37ED_E2FF_9173_41E4_8F4A84137292",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB66A7EB_E2FF_9177_41C7_CC2520605239",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6627EB_E2FF_9177_41D1_D45030F7B167",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6787EB_E2FF_9177_41E2_27B0C320FE74",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_537197C8_739B_FD02_41B8_74017C96091D",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7377E6_E2FF_9171_41D5_8A807B459C2C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB65B7EA_E2FF_9171_41E3_48B39A806828",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6527EA_E2FF_9171_417C_572F35DFCA30",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6137EC_E2FF_9171_41DF_03FAC3C6CBFB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6A47EF_E2FF_914F_41CF_984C0CBFFFB8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB69D7EF_E2FF_914F_41E7_90791ED9D5E4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6937EF_E2FF_914F_41CC_629ECC6B22BB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5FD9A4B5_737E_3302_419B_52FB8B8912F5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5FD974B5_737E_3302_41D5_7AF608613B16",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5FD904B5_737E_3302_41C1_205DDA0A5682",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5FD924B5_737E_3302_4193_5DD8B6378E3E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_47AC4E05_748E_EF02_41C9_DDCC954BAD6B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7107E6_E2FF_9171_41C4_541C286A91FF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_48AB4569_743F_F35E_41DC_1742DC71DEFF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7F37E8_E2FF_9171_41E6_DEC2C3B014A4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB78C7E8_E2FF_9171_41E9_882DF8658BCF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7857E8_E2FF_9171_41E1_657B678DA206",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5AE7F5C6_7EDA_39FE_41C2_51DD52FA9AF3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511BB363_73BE_1506_41D1_EB2616C4E921",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_511B4363_73BE_1506_41A7_D2CF45E9DA92",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5749D20A_7386_F706_41C1_3574BBAC57CF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_4743F7CC_741E_3F56_41C4_7E781387D881",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_474267CC_741E_3F56_41BE_0B5C2B45C56C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ],
 "id": "AnimatedImageResource_474D07CC_741E_3F56_41DC_4326A2A76053",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_65926855_73FA_1303_41C1_F80EB26EDC58",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_65921855_73FA_1303_41DB_14CB86643E93",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB79C7E8_E2FF_9171_41EA_62522210ECE2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7947E8_E2FF_9171_41E2_92CB4682D733",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 58,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_1_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ],
 "id": "AnimatedImageResource_FB7AB7E9_E2FF_9173_41D4_C70CAFA395EA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_6EEEF4FD_740E_1136_41BB_8C88B15C2DD6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5B89D2E9_7EDE_3BB3_4185_1217A1F8D082",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_FB6747EB_E2FF_9177_41D7_FD25095952A0",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_FB60C7EB_E2FF_9177_41D0_A487C13FA59E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_F0A1F9B8_E2EA_91D0_41C3_05E4BFFF1772",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_F0A039B8_E2EA_91D0_417E_4972BBEBB61B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_699A56A1_7436_31CE_41D7_8A91E530DBCB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7A77E9_E2FF_9173_41C8_C8CC99C8B10B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7BE7E9_E2FF_9173_41EB_BA7F5495FBA4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7B37E9_E2FF_9173_41E3_438ECE22E617",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5B84E2E8_7EDE_3BB1_41D8_445EFD3C587A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5B8BF2E8_7EDE_3BB1_41D6_6A7A33061626",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_5B8B42E9_7EDE_3BB3_41C5_D4F4B5723319",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_7_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5B8A12E9_7EDE_3BB3_41AB_81B7FA842F50",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_8_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5B8A62E9_7EDE_3BB3_41D1_D827034D296C",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6AC7EF_E2FF_914F_41E3_731B1ED166C2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_658DB856_73FA_1301_4191_007BCF33A521",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_658D1856_73FA_1301_4190_856B09C68960",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_658CB856_73FA_1301_41D0_4018981866BA",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_658C7856_73FA_1301_41D8_BAAF9FB8A686",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_511A2363_73BE_1507_41B0_927AAFAB7F41",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_65914855_73FA_1303_41C4_F10E3A7D9A07",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6E47EE_E2FF_9171_41E1_1C38C5F93FAC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB6FB7EE_E2FF_9171_41EC_52B0AC9D6C25",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB6F37EE_E2FF_9171_41E1_70874FE11D5E",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_48AB6569_743F_F35E_41C4_DD2560FF0F46",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7D17E7_E2FF_917F_41BE_DCD1023115DB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_FB7E87E7_E2FF_917F_4188_55B76BE138BF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7EF7E7_E2FF_917F_41C0_0F261E2DEF53",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7E57E7_E2FF_917F_41E6_1DCDCD498C76",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_1_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7FD7E7_E2FF_917F_41E3_4BBBA4471B4F",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB7017E5_E2FF_9173_41E7_534A3DA37240",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_FB71B7E6_E2FF_9171_41C4_C4650A4749C3",
 "rowCount": 6,
 "frameCount": 24
},
{
 "horizontalAlign": "left",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "width": 36,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "verticalAlign": "middle",
 "width": 50,
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 80,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 80
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "width": "90%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "paddingRight": 0,
 "minHeight": 1,
 "right": 9,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "width": 50,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 50,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 50
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "width": "85%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarVisible": "rollOver",
 "paddingRight": 50,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "50%",
 "minWidth": 460,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingBottom": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 20,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "width": "25%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "height": "75%",
 "maxHeight": 60
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 140,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "minHeight": 1,
 "itemMinHeight": 50,
 "width": "100%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemPaddingLeft": 3,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "minWidth": 1,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "height": "92%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "itemHeight": 160,
 "propagateClick": true,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "paddingRight": 70,
 "itemLabelGap": 7,
 "itemLabelFontSize": 16,
 "itemThumbnailShadow": false,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemLabelFontColor": "#666666",
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadow": true,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMaxWidth": 1000,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "itemMaxHeight": 1000,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "italic",
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "borderRadius": 5,
 "itemMode": "normal",
 "paddingBottom": 70,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailBorderRadius": 0
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "insetBorder": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "class": "WebFrame",
 "borderRadius": 0,
 "scrollEnabled": false,
 "height": "100%",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "WebFrame"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "show": "this.openLink('https://www.google.com/maps?ll=31.32483,74.413928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12116451256336649237', '_self')"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "width": "25%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "propagateClick": true,
 "cursor": "hand",
 "height": "75%",
 "maxHeight": 60
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Container photo"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "width": "55%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-left"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarVisible": "rollOver",
 "paddingRight": 60,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "45%",
 "minWidth": 460,
 "borderSize": 0,
 "backgroundOpacity": 1,
 "gap": 0,
 "paddingBottom": 20,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 20,
 "shadow": false,
 "data": {
  "name": "-right"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "width": "25%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "cursor": "hand",
 "height": "75%",
 "maxHeight": 60
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Label_C559C0ED_E037_F703_41C7_659205F9FE23",
  "this.Image_C531E783_E036_B906_41C2_473921148D5F"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarVisible": "rollOver",
 "paddingRight": 40,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingBottom": 40,
 "height": "100%",
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 40,
 "data": {
  "name": "- Buttons set"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "Image",
 "borderRadius": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "maxHeight": 1000
},
{
 "horizontalAlign": "right",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 0,
 "paddingBottom": 0,
 "height": 60,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 30,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": 370,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "cursor": "hand",
 "height": "36.14%",
 "maxHeight": 60
},
{
 "progressRight": 0,
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "vrPointerSelectionColor": "#FF6600",
 "paddingLeft": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowColor": "#000000",
 "minHeight": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "toolTipTextShadowColor": "#000000",
 "toolTipFontSize": 12,
 "playbackBarBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "width": "100%",
 "progressBackgroundColorDirection": "vertical",
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundOpacity": 1,
 "transitionDuration": 500,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "borderSize": 0,
 "progressLeft": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipShadowOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressOpacity": 1,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "toolTipFontFamily": "Arial",
 "shadow": false,
 "playbackBarProgressBorderRadius": 0,
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressBarOpacity": 1,
 "progressBarBorderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBackgroundOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "toolTipFontColor": "#606060",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadow": true,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "progressHeight": 10,
 "top": "0%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarLeft": 0,
 "playbackBarHeadWidth": 6,
 "progressBottom": 2,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "firstTransitionDuration": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerSelectionTime": 2000,
 "playbackBarProgressBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "verticalAlign": "middle",
 "width": "14.22%",
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 60
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "verticalAlign": "middle",
 "width": "14.22%",
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "transparencyActive": false,
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 60
},
{
 "horizontalAlign": "right",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 50,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 60,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "cursor": "hand",
 "height": "10%",
 "maxHeight": 60
},
{
 "horizontalAlign": "center",
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "width": "100%",
 "verticalAlign": "bottom",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "Image",
 "borderRadius": 0,
 "maxWidth": 2000,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "maxHeight": 1000
},
{
 "horizontalAlign": "right",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "height": "5%",
 "contentOpaque": false,
 "paddingTop": 20,
 "shadow": false,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 100,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 30,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Container text"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": 370,
 "height": 40,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
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
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "right": "0%",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "top": "26%",
 "width": "100%",
 "bottom": "26%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingBottom": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "scrollBarWidth": 10,
 "width": "100%",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 5,
 "paddingTop": 0,
 "height": 130,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
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
  "this.Button_C7F917C4_E04F_9902_41E1_65134BB31E3C"
 ],
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-1"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0"
 ],
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-2"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52"
 ],
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-3"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
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
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-4"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
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
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-5"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_C4D76E2D_E05A_EB02_41E0_44EF18C2D008"
 ],
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "scrollBarWidth": 10,
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 0,
 "paddingTop": 0,
 "layout": "vertical",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-Level 2-6"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "url": "skin/Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6.png",
 "width": "100%",
 "verticalAlign": "middle",
 "top": "1.42%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "24.096%",
 "class": "Image",
 "borderRadius": 0,
 "maxWidth": 368,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image5083"
 },
 "propagateClick": false,
 "maxHeight": 180
},
{
 "pressedLabel": "Lorem Ipsum",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "left": "0%",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "top": "-19.32%",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "73.064%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "textShadowBlurRadius": 3,
 "fontFamily": "Segoe Print",
 "fontColor": "#FFFFFF",
 "id": "Label_C559C0ED_E037_F703_41C7_659205F9FE23",
 "left": "-5.59%",
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "right": "32.52%",
 "textShadowColor": "#000000",
 "textShadowOpacity": 0.54,
 "text": "Developed by:",
 "textShadowVerticalLength": 1,
 "verticalAlign": "middle",
 "bottom": "25.58%",
 "minWidth": 1,
 "fontSize": "2vmin",
 "textShadowHorizontalLength": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "height": "4.079%",
 "fontStyle": "normal",
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Label42068"
 },
 "propagateClick": false,
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "horizontalAlign": "center",
 "id": "Image_C531E783_E036_B906_41C2_473921148D5F",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "url": "skin/Image_C531E783_E036_B906_41C2_473921148D5F.png",
 "width": "64.516%",
 "verticalAlign": "middle",
 "bottom": "15.66%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "height": "8.466%",
 "click": "this.openLink('http://www.panoraproperties.com', '_blank')",
 "class": "Image",
 "borderRadius": 0,
 "maxWidth": 1472,
 "paddingBottom": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image41967"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxHeight": 608
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 20,
 "height": "100%",
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.16vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.43vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.65vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5
},
{
 "iconWidth": 32,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "width": 180,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "height": 50,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "2.39vh",
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0.7,
 "minWidth": 1,
 "label": "LOREM IPSUM",
 "paddingBottom": 0,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 50,
 "layout": "horizontal",
 "paddingTop": 0,
 "data": {
  "name": "Button"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedBackgroundColor": [
  "#000000"
 ]
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "46%",
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.16vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.52vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 },
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "gap": 10,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "height": "75%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "- content"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Main Building >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Tour Info"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Cafeteria Section >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Panorama List"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "pressedLabel": "Inserdt Text",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Sports Areas >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Location"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Hostels >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Floorplan"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Educational Avenues >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Photoalbum"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 50,
 "label": "Aerial Views >",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button Contact"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.3,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "overflow": "visible",
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": 40,
 "height": 2,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "borderSize": 0,
 "backgroundOpacity": 1,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 },
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 78,
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText47602"
 },
 "propagateClick": true,
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingBottom": 0,
 "height": 56,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-Container Icons 1"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 7,
 "paddingBottom": 0,
 "height": 44,
 "layout": "horizontal",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "-Container Icons 2"
 },
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Main Lobby",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 25)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Ground Floor Center",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "pressedLabel": "Reception",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Auditorium",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 29)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Library",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 32)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Computer Lab",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 23)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "lecture Hall",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_C7F917C4_E04F_9902_41E1_65134BB31E3C",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Conference Room",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Cafeteria",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Stationary Store",
 "paddingBottom": 0,
 "height": 36,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "pressedLabel": "Lorem Ipsum",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Mart",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "GYM",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Media Studio",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 5"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Cafetaria Courtyard",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 6"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Cricket Ground",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Basketball Court",
 "paddingBottom": 0,
 "height": 36,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "pressedLabel": "Lorem Ipsum",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Gym",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Ground",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Mess Area",
 "paddingBottom": 0,
 "height": 36,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "pressedLabel": "Lorem Ipsum",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Bedroom",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Library",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Lecture Hall",
 "paddingBottom": 0,
 "height": 36,
 "gap": 23,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "pressedLabel": "Lorem Ipsum",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Court Room",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 3"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "label": "Computer Lab",
 "paddingBottom": 0,
 "height": 36,
 "gap": 5,
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 4"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "paddingLeft": 5,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "rollOverFontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "rollOverFontSize": 18,
 "paddingBottom": 0,
 "height": 50,
 "label": "BACK",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "data": {
  "name": "Button <BACK"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 30,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "data": {
  "name": "line"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "shadow": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingBottom": 0,
 "height": 8,
 "layout": "absolute",
 "class": "Container",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "line separator"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Oswald",
 "rollOverShadow": false,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "rollOverShadowBlurRadius": 18,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Main Aerial View",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 5,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 1"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Football Field",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "layout": "horizontal",
 "id": "Button_C4D76E2D_E05A_EB02_41E0_44EF18C2D008",
 "paddingLeft": 10,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "minWidth": 1,
 "width": "100%",
 "fontSize": 18,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 36,
 "label": "Backyard",
 "fontStyle": "italic",
 "class": "Button",
 "borderRadius": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 23,
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "Button text 2"
 },
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "fontWeight": "normal",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "width": "25%",
 "verticalAlign": "top",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": "100%",
 "class": "Image",
 "borderRadius": 0,
 "maxWidth": 200,
 "paddingTop": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "maxHeight": 200
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "paddingLeft": 10,
 "scrollBarVisible": "rollOver",
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "width": "75%",
 "minWidth": 1,
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "height": "100%",
 "class": "HTMLText",
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.43vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.43vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.43vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.43vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.88vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.88vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 },
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "verticalAlign": "middle",
 "width": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": true,
 "click": "this.openLink('https://www.rlkumc.edu.pk/', '_blank')",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 101,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "data": {
  "name": "IconButton Info"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "verticalAlign": "middle",
 "width": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 101,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "verticalAlign": "middle",
 "width": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 44,
 "transparencyActive": false,
 "click": "this.openLink('https://www.google.com/maps?ll=31.32483,74.413928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12116451256336649237', '_blank')",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 101,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "horizontalAlign": "center",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "verticalAlign": "middle",
 "width": 51.6,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "height": 45.6,
 "transparencyActive": true,
 "click": "this.openLink('https://www.facebook.com/rlku.mdc/', '_blank')",
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 58,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "data": {
  "name": "IconButton FB"
 },
 "propagateClick": true,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "horizontalAlign": "center",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "width": 50,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "transparencyActive": false,
 "paddingBottom": 0,
 "height": 50,
 "class": "IconButton",
 "borderRadius": 0,
 "maxWidth": 101,
 "paddingTop": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "data": {
  "name": "IconButton --"
 },
 "propagateClick": false,
 "visible": false,
 "cursor": "hand",
 "maxHeight": 101
}],
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "layout": "absolute",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Player",
 "borderRadius": 0,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "data": {
  "name": "Player468"
 },
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scripts": {
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
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
