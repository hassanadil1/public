(function(){
    var script = {
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.thumbnaillist5245",
  "this.IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B",
  "this.IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05",
  "this.IconButton_6DE25BC5_7842_0E10_41C9_B1837FD4F7F4",
  "this.IconButton_6D01ED47_784E_0A1C_41B6_E411C954522E",
  "this.IconButton_93F42B8E_813E_2A40_41DB_5BF9AFB459DC"
 ],
 "minHeight": 20,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "start": "this.init(); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "id": "rootPlayer",
 "propagateClick": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "borderSize": 0,
 "contentOpaque": false,
 "downloadEnabled": false,
 "buttonToggleFullscreen": "this.IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "class": "Player",
 "gap": 10,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Player28156"
 },
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "definitions": [{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F53B83D_737E_3303_41D7_800E821D2255",
 "class": "Panorama",
 "label": "D1",
 "thumbnailUrl": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5E49641C_737A_1301_41DA_6DD783B633F2"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B778C4E6_8148_0A2D_41C2_20EE8B940201",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.1,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -165.62,
  "hfov": 138,
  "class": "PanoramaCameraPosition",
  "pitch": 3
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.48,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -1.45
 }
},
{
 "initialSequence": "this.sequence_5A6B855A_748A_7D06_41CA_B4933E17A6BD",
 "automaticZoomSpeed": 10,
 "id": "panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.91,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -19.81
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
 "class": "Panorama",
 "label": "Biochemistry Lab",
 "thumbnailUrl": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_52BD4931_73BA_3502_41B0_C503ABBE27BD"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -1.9,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -0.98
 }
},
{
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
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
 "class": "Panorama",
 "label": "Main Lobby",
 "thumbnailUrl": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
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
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.12,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -3.62
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
 "class": "Panorama",
 "label": "Auditorium",
 "thumbnailUrl": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_67B5F0A0_738E_1301_41CD_2E31C8CA7B3E",
  "this.overlay_6069C7B5_738E_1D03_41BB_A4F769B84525"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B7B0D4B9_8148_0A27_41C0_8F2938A8A395",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -116.25,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_556414ED_741A_3156_4158_568C72D095C6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_556414ED_741A_3156_4158_568C72D095C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55A0234E_7416_3752_4194_2188873BB455",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55A0234E_7416_3752_4194_2188873BB455_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
   "camera": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.47,
  "class": "PanoramaCameraPosition",
  "pitch": -0.87
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -108.21,
  "class": "PanoramaCameraPosition",
  "pitch": 6.3
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -3.8,
  "hfov": 128,
  "class": "PanoramaCameraPosition",
  "pitch": -2.79
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  },
  {
   "yaw": -91.55,
   "backwardYaw": 45.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "distance": 1
  },
  {
   "yaw": 89.21,
   "backwardYaw": 45.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "distance": 1
  }
 ],
 "vfov": 180,
 "label": "Outside Lecture Halls",
 "id": "panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_65D39159_7416_F37E_41C2_99286C66D15A",
  "this.overlay_6688C30A_7416_10D2_4158_B5D735F405CF",
  "this.overlay_65CD16CB_741A_1153_41C7_ABAF9F487FD4",
  "this.overlay_6622E9A3_741B_F3D2_41BC_AA16C865E2FC",
  "this.overlay_6773AC54_741A_3176_41C6_9E199012C7B5"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "yaw": 87.32,
   "backwardYaw": 63.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "distance": 1
  }
 ],
 "vfov": 180,
 "label": "Lecture Halls",
 "id": "panorama_7F4C491C_737E_F502_41D9_777494660AF3",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_61D070EF_740E_1152_41C7_708067503AE4"
 ],
 "hfovMax": 139
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B7A6B4C5_8148_0A6F_41B1_E84BD23F9A73",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_55662C59_741A_317E_41CA_F993B7EE3874",
 "class": "Panorama",
 "label": "Histology Lab",
 "thumbnailUrl": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_53B56F5B_747B_EF72_41C8_D7AC8F46C7E0"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.45,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -1.4
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55681365_741A_7756_41DB_6DE163FFE094_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.72,
  "class": "PanoramaCameraPosition",
  "pitch": -0.3
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55A0234E_7416_3752_4194_2188873BB455_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.27,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 10.09
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B77294E0_8148_0A25_41AA_B6FC510F44D4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -134.1,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 81.76,
  "class": "PanoramaCameraPosition",
  "pitch": -6.58
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556414ED_741A_3156_4158_568C72D095C6"
  }
 ],
 "vfov": 180,
 "label": "Library Enterance",
 "id": "panorama_55652BE4_741A_1756_41C2_D9006945E09F",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_420CB27C_740E_1136_41B5_8E6A8A021D5A",
  "this.overlay_4FBAE6BF_740E_3132_41D8_1CB873CE046A",
  "this.overlay_4958D4AA_7409_F1D2_41DA_3C1CD520C950",
  "this.overlay_4EFC36AC_740A_11D6_41B6_445DDCBE24F4"
 ],
 "hfovMax": 130
},
{
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
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "1st Floor Roundabout",
 "id": "panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_561DA61A_7476_10F2_41B9_710871B477CF",
  "this.overlay_506C593F_747A_3332_41D4_1B4DA946C1D1",
  "this.overlay_50C72282_747A_11D2_41CE_66B88890ABFB"
 ],
 "thumbnailUrl": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 139.55,
  "class": "PanoramaCameraPosition",
  "pitch": 6.43
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -36.79,
  "class": "PanoramaCameraPosition",
  "pitch": -1.81
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.15,
  "class": "PanoramaCameraPosition",
  "pitch": -0.04
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  },
  {
   "yaw": 63.75,
   "backwardYaw": 87.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "distance": 1
  },
  {
   "yaw": -61.25,
   "backwardYaw": 87.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "distance": 1
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
 "class": "Panorama",
 "label": "Outside Lecture Halls Cont.",
 "thumbnailUrl": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_60419F79_7416_EF3F_41C4_BCA8B8B8A714",
  "this.overlay_6CDE63FE_7416_3735_41D6_485C40824A6F",
  "this.overlay_62922FBA_7416_6F32_41AD_32787F88FEA6"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_55680E32_741A_3132_4184_DD9E6C977004",
 "class": "Panorama",
 "label": "Library ",
 "thumbnailUrl": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4E4BFF96_7436_2FF5_4143_481D7EE9DEA2"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
 "class": "Panorama",
 "label": "Physiology Lab ",
 "thumbnailUrl": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5091B678_738A_1F02_41D5_66735C77F911"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F"
  }
 ],
 "vfov": 180,
 "label": "Computer Lab",
 "id": "panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_35C87467_743A_1153_41CB_4136AF0FFE10",
  "this.overlay_37C1AB1E_743A_10F2_41B2_C1E07A8BBC99"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.99,
  "class": "PanoramaCameraPosition",
  "pitch": 1.06
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55680E32_741A_3132_4184_DD9E6C977004_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.88,
  "class": "PanoramaCameraPosition",
  "pitch": -1.89
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.01,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 4.93
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.58,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -2.69
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  }
 ],
 "vfov": 180,
 "label": "1st Floor Left",
 "id": "panorama_55A0234E_7416_3752_4194_2188873BB455",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5C98044F_7476_3152_41C9_33960F237160",
  "this.overlay_5DE4C74F_7476_3F53_41D2_0576FC593E13"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.22,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -7.25
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.69,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 3.37
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.04,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": -4.22
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 161.21,
  "class": "PanoramaCameraPosition",
  "pitch": -5.65
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.68,
  "class": "PanoramaCameraPosition",
  "pitch": -7.7
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
 "class": "Panorama",
 "label": "Admin Block",
 "thumbnailUrl": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_65352748_738A_1D01_41B1_EB7BB12CF284"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
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
 "vfov": 180,
 "label": "Ground Floor Right Side",
 "id": "panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_52E23B1C_738A_3502_41D3_C40C081FAA7F",
  "this.overlay_520109A8_738E_1501_41C6_A9AEC2763674",
  "this.overlay_5239DBD0_738E_3502_41AB_A531B954A028"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.94,
  "class": "PanoramaCameraPosition",
  "pitch": 3.98
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0.12,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -0.4
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -52.01,
   "backwardYaw": -33.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "distance": 1
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
 "class": "Panorama",
 "label": "Football Court",
 "thumbnailUrl": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6BE4C3B1_73FE_3502_41A0_4F2F1478F019",
  "this.overlay_6622AA41_73FE_3702_41C2_99AF7D908671"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "yaw": 45.9,
   "backwardYaw": -91.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "distance": 1
  }
 ],
 "vfov": 180,
 "label": "Lecture hall",
 "id": "panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6FCEE5EE_740A_1352_41C0_1D2B9FEA5C6A"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_556414ED_741A_3156_4158_568C72D095C6_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.55,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0.26
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 150.11,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 4.84
 }
},
{
 "items": [
  {
   "media": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5301E1_737E_3503_41D2_E4A401E65151_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5514FD_737F_F303_41C6_9367D95768ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F53B83D_737E_3303_41D7_800E821D2255_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F4C491C_737E_F502_41D9_777494660AF3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565E30D_741A_10D6_41CF_E95F0043A514_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55652BE4_741A_1756_41C2_D9006945E09F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_556414ED_741A_3156_4158_568C72D095C6",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_556414ED_741A_3156_4158_568C72D095C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55680E32_741A_3132_4184_DD9E6C977004_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_556808CF_741A_1152_41D3_509F15D71B1F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55662C59_741A_317E_41CA_F993B7EE3874_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55A0234E_7416_3752_4194_2188873BB455",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55A0234E_7416_3752_4194_2188873BB455_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 39, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "thumbnaillist5245_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F51DABC_737E_3702_41D3_EA75A59D4791"
  }
 ],
 "vfov": 180,
 "label": "Conference room",
 "id": "panorama_7F51B3AA_737E_1501_41D4_77052DD57D26",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6F6BED07_739E_6D0F_41CE_01FBB7934978"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 114.57,
  "hfov": 126,
  "class": "PanoramaCameraPosition",
  "pitch": -8.26
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B7AC94CD_8148_0A7F_41BA_BE7616816F98",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.43,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  },
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
  }
 ],
 "vfov": 180,
 "label": "Aerial View",
 "id": "panorama_7F65669E_737E_7F01_41D8_A4E55664F66F",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_t.jpg"
  }
 ],
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
 "hfovMax": 129
},
{
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
 "vfov": 180,
 "label": "Library Reception",
 "id": "panorama_556414ED_741A_3156_4158_568C72D095C6",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4C07EB5C_740A_F776_41C8_008B1313331C",
  "this.overlay_4CB3874F_7436_3F52_41B3_1BBE0148FD24",
  "this.overlay_4F2541ED_743E_7356_41B5_CD2E86DC4016"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F51B3AA_737E_1501_41D4_77052DD57D26"
  }
 ],
 "vfov": 180,
 "label": "Executive Block",
 "id": "panorama_7F51DABC_737E_3702_41D3_EA75A59D4791",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_652F66F4_738E_1F02_41CD_DA4A83530975",
  "this.overlay_68E67F8F_739A_ED1F_4181_5F549C460B81",
  "this.overlay_6ABFA57B_739A_7D06_4195_41BC1A32CAA2"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55654213_741A_30F2_41DD_060A59A7F8ED"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_57DDB99A_7416_13FD_41A1_C68360D1E941",
 "class": "Panorama",
 "label": "Skills Lab",
 "thumbnailUrl": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5CCF0547_747A_1353_41B4_133B2DC83566"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9"
  },
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
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6",
 "class": "Panorama",
 "label": "Patio",
 "thumbnailUrl": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5F8B9A4B_738A_F707_41D3_9C89F562A59B",
  "this.overlay_5F737F8B_738A_6D07_41B3_912A47850D7A",
  "this.overlay_5B1C5656_7379_FF0E_41D4_41E4011FC267",
  "this.overlay_59BEF8BB_737A_1306_41D7_BE6B0A0E94AE",
  "this.overlay_5DE6A688_737A_1F01_41C1_7AF412E06173"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55A0234E_7416_3752_4194_2188873BB455"
  }
 ],
 "vfov": 180,
 "label": "Anatomy Museum",
 "id": "panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4B156D8E_7437_F3D2_41AF_EDA112C9F0B0"
 ],
 "hfovMax": 138
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Towards Lecture Halls",
 "id": "panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9",
 "class": "Panorama",
 "overlays": [
  "this.overlay_58AA1902_7486_1506_41B6_C44D348272AF",
  "this.overlay_59619E5C_748E_2F01_41C0_BB6C9B134069"
 ],
 "thumbnailUrl": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F564B07_737E_750E_41C4_C63E4A334F67"
  }
 ],
 "vfov": 180,
 "label": "Common Room",
 "id": "panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6A0DF7AA_743A_1FD2_419B_2B827CCEBA3D"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F517DFA_737F_ED06_4165_F2A60404662C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F55DC4C_737E_1302_41BB_195A01AA4710"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F66C81D_737E_1303_41B9_140893ED9A40",
 "class": "Panorama",
 "label": "Ground FLoor Centre",
 "thumbnailUrl": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6E2300D8_738A_1301_41D5_CDA5E4B359B1",
  "this.overlay_534087FF_738A_3CFE_41D7_8E8F61E182C3",
  "this.overlay_577A75E7_7386_3D0F_41D9_D45471705A5F",
  "this.overlay_558D630C_7386_1501_41CE_55122EBC78FA",
  "this.overlay_54F5D4F7_7386_130E_41D5_FDE188BBE4BA",
  "this.overlay_5878A29C_740E_11F6_41C1_C3847C9885B0",
  "this.overlay_58442FA6_7419_EFD2_41AA_0F539FCA0BC0"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F564B07_737E_750E_41C4_C63E4A334F67",
 "class": "Panorama",
 "label": "Outside Common Room",
 "thumbnailUrl": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_68B6C758_743E_1F7E_41D5_8C2984335071",
  "this.overlay_55725FF3_743E_2F32_41A1_4817849C981C",
  "this.overlay_54C2D5D6_740A_3372_41C6_A2DDF7EDC759"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "yaw": -33.57,
   "backwardYaw": -52.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "vfov": 180,
 "label": "Backyard",
 "id": "panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_67976942_738A_7506_41DB_DF9611AD6CC9",
  "this.overlay_6712C0A5_738A_3302_41B7_0528811FCBB5",
  "this.overlay_671D6BB6_73FA_150E_41DC_B9E06BD39783",
  "this.overlay_66931BC0_73FA_F502_41C8_6EF537E2C96C"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.27,
  "class": "PanoramaCameraPosition",
  "pitch": -32.67
 }
},
{
 "adjacentPanoramas": [
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
   "panorama": "this.panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  },
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
   "panorama": "this.panorama_55A0234E_7416_3752_4194_2188873BB455"
  }
 ],
 "vfov": 180,
 "label": "1st Floor",
 "id": "panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
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
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F517DFA_737F_ED06_4165_F2A60404662C_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.01,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": -0.83
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 51.66,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 2.14
 }
},
{
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
 "vfov": 180,
 "label": "1st Floor Staircase",
 "id": "panorama_5565E30D_741A_10D6_41CF_E95F0043A514",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_41A2488E_740A_11D2_41D2_0472100E2349",
  "this.overlay_43C59350_740A_174E_41D6_83D0EC5785F5"
 ],
 "hfovMax": 130
},
{
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
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B",
 "class": "Panorama",
 "label": "Hallway to Lecture Halls",
 "thumbnailUrl": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_66C261E4_740E_7356_41C0_B28DD484F096",
  "this.overlay_65EF23E3_740A_1752_41C7_0B8FD545F8F8",
  "this.overlay_671EBEAD_7409_F1D6_41CD_F7212C7BBA7D",
  "this.overlay_6ED66501_7436_30CE_41CE_131CE5940867",
  "this.overlay_6FA1E7F1_743A_1F4E_41BC_A1A509A3F7CE"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B786A4D9_8148_0A67_41DD_3908F65C3E5B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.68,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_556414ED_741A_3156_4158_568C72D095C6"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_55681365_741A_7756_41DB_6DE163FFE094",
 "class": "Panorama",
 "label": "Library_3",
 "thumbnailUrl": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_497FF656_743A_3172_41B9_2C197E7BC5B4"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B7BBE4BF_8148_0A1B_41D0_03AA859DF66E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 88.45,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_B79854D3_8148_0A6B_4184_825FFEE0FF85",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.68,
  "hfov": 133,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -14.32,
  "class": "PanoramaCameraPosition",
  "pitch": -1.03
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5",
 "class": "Panorama",
 "label": "D2",
 "thumbnailUrl": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_58ECBF1A_737E_6D01_41DB_493201319C26"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F65669E_737E_7F01_41D8_A4E55664F66F"
  }
 ],
 "partial": false,
 "vfov": 180,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Cafeteria",
 "id": "panorama_7F652082_737E_3301_41D4_AEB36A0D9E66",
 "class": "Panorama",
 "overlays": [
  "this.overlay_60658240_7386_3702_41C8_0F6AEC5BAAD8",
  "this.overlay_6002A2BA_7386_1701_41CF_F9725C347840"
 ],
 "thumbnailUrl": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "hfovMax": 130
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_55654213_741A_30F2_41DD_060A59A7F8ED_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 23.55,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -1.34
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.55,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 0.28
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.84,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": -9.76
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E",
 "class": "Panorama",
 "label": "Forensic Museum",
 "thumbnailUrl": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_346568F1_740E_314E_41DC_9B821A651638"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7F66C81D_737E_1303_41B9_140893ED9A40"
  }
 ],
 "vfov": 180,
 "label": "Ground Floor Left Side",
 "id": "panorama_7F517DFA_737F_ED06_4165_F2A60404662C",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6EEAD4D4_7386_1301_41D9_0A22EF4D9A39",
  "this.overlay_6DD27E2C_7386_2F01_41D4_BE5038CB86A3",
  "this.overlay_6EA0ADF9_73BA_2D03_417F_E7F51694D1E6"
 ],
 "hfovMax": 130
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7F564B07_737E_750E_41C4_C63E4A334F67_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 126.53,
  "class": "PanoramaCameraPosition",
  "pitch": -3.07
 }
},
{
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
 "vfov": 180,
 "label": "1st Floor Right ",
 "id": "panorama_55654213_741A_30F2_41DD_060A59A7F8ED",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_51AD1BF9_747F_F73F_41AD_0BBE8646155C",
  "this.overlay_52B411E2_747E_3352_41CF_000D4604144F",
  "this.overlay_52ECD5D0_747A_134E_41D3_D60286E1FDAA"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_55681365_741A_7756_41DB_6DE163FFE094"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_556808CF_741A_1152_41D3_509F15D71B1F",
 "class": "Panorama",
 "label": "Library_2",
 "thumbnailUrl": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_4FF77276_743A_3132_41CE_00130B654669"
 ],
 "hfovMax": 130
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "minHeight": 50,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "toolTipBorderSize": 1,
 "progressBorderRadius": 4,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 100,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarBottom": 10,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "class": "ViewerArea",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 20,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 2,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "bottom": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "paddingTop": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarWidth": 10,
 "minHeight": 0,
 "id": "thumbnaillist5245",
 "left": 0.35,
 "paddingLeft": 20,
 "scrollBarColor": "#FFFFFF",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "width": 179.65,
 "itemLabelHorizontalAlign": "center",
 "borderRadius": 5,
 "itemThumbnailOpacity": 1,
 "scrollBarOpacity": 0.5,
 "minWidth": 0,
 "itemPaddingRight": 3,
 "itemThumbnailShadowHorizontalLength": 3,
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "itemThumbnailShadowOpacity": 0.8,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "class": "ThumbnailList",
 "itemBackgroundOpacity": 0,
 "itemLabelPosition": "bottom",
 "itemOpacity": 1,
 "itemThumbnailShadowSpread": 1,
 "shadow": false,
 "itemThumbnailBorderRadius": 5,
 "paddingBottom": 10,
 "verticalAlign": "top",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "maxHeight": 800,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.2,
 "itemThumbnailShadowVerticalLength": 3,
 "paddingRight": 20,
 "itemLabelTextDecoration": "none",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "top": 88,
 "itemThumbnailShadowBlurRadius": 4,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "playList": "this.thumbnaillist5245_playlist",
 "borderSize": 0,
 "maxWidth": 800,
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#FFFFFF",
 "bottom": 55,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "gap": 10,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList28173"
 },
 "itemThumbnailShadowColor": "#000000",
 "visible": false
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipShadowColor": "#333333",
 "toolTipShadowVerticalLength": 0,
 "toolTipPaddingRight": 6,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B",
 "backgroundOpacity": 0,
 "width": 47.6,
 "toolTipBorderSize": 1,
 "paddingRight": 0,
 "right": "1.02%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "minWidth": 1,
 "toolTipBorderRadius": 3,
 "iconURL": "skin/IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B.png",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "top": "1.58%",
 "toolTip": "Fullscreen",
 "borderSize": 0,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "maxWidth": 128,
 "class": "IconButton",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": 37,
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "data": {
  "name": "IconButton1493"
 },
 "verticalAlign": "middle",
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "minHeight": 0,
 "id": "IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05",
 "left": "0.55%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 40,
 "borderRadius": 0,
 "iconURL": "skin/IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05.png",
 "propagateClick": false,
 "minWidth": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05_pressed.png",
 "mode": "push",
 "height": 40,
 "click": "this.setComponentVisibility(this.thumbnaillist5245, true, 0, null, null, false); this.setComponentVisibility(this.thumbnaillist5245, false, 5000, null, 'hideEffect', false)",
 "bottom": "1.47%",
 "class": "IconButton",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05_rollover.png",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Button49931"
 },
 "verticalAlign": "middle",
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 1023,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_6DE25BC5_7842_0E10_41C9_B1837FD4F7F4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "47.92%",
 "width": 40.25,
 "borderRadius": 0,
 "minWidth": 1,
 "iconURL": "skin/IconButton_6DE25BC5_7842_0E10_41C9_B1837FD4F7F4.png",
 "propagateClick": false,
 "borderSize": 0,
 "mode": "push",
 "maxWidth": 1024,
 "click": "this.openLink('https://www.instagram.com/rlku.mdc/', '_blank')",
 "bottom": "1.87%",
 "class": "IconButton",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton14534"
 },
 "verticalAlign": "middle",
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 1095,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_6D01ED47_784E_0A1C_41B6_E411C954522E",
 "left": "0.57%",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "iconURL": "skin/IconButton_6D01ED47_784E_0A1C_41B6_E411C954522E.png",
 "propagateClick": false,
 "top": "1.15%",
 "borderSize": 0,
 "mode": "push",
 "maxWidth": 1095,
 "click": "this.openLink('https://www.google.com/maps?ll=31.32483,74.413928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12116451256336649237', '_blank')",
 "class": "IconButton",
 "height": 40,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton15072"
 },
 "verticalAlign": "middle",
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "maxHeight": 23,
 "horizontalAlign": "center",
 "minHeight": 1,
 "id": "IconButton_93F42B8E_813E_2A40_41DB_5BF9AFB459DC",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "1.91%",
 "width": 23,
 "borderRadius": 0,
 "minWidth": 1,
 "iconURL": "skin/IconButton_93F42B8E_813E_2A40_41DB_5BF9AFB459DC.png",
 "propagateClick": false,
 "borderSize": 0,
 "mode": "push",
 "maxWidth": 23,
 "click": "this.openLink('https://www.rlkumc.edu.pk/', '_blank')",
 "bottom": "2.73%",
 "class": "IconButton",
 "height": 21.4,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton16034"
 },
 "verticalAlign": "middle",
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD8A4B4_737E_3302_41D8_319062C470ED",
   "yaw": 74.38,
   "hfov": 19.36,
   "pitch": -28.56,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5E49641C_737A_1301_41DA_6DD783B633F2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 74.38,
   "hfov": 19.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.56
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_5A6B855A_748A_7D06_41CA_B4933E17A6BD",
 "movements": [
  {
   "yawDelta": 19.2,
   "yawSpeed": 7.96,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 321.6,
   "yawSpeed": 7.96,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "yawDelta": 19.2,
   "yawSpeed": 7.96,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51185362_73BE_1501_41C2_6436667FB6F1",
   "yaw": -3.03,
   "hfov": 12.75,
   "pitch": -10.87,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_52BD4931_73BA_3502_41B0_C503ABBE27BD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -3.03,
   "hfov": 12.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_658DB856_73FA_1301_4191_007BCF33A521",
   "yaw": 2.37,
   "hfov": 18.13,
   "pitch": -12.96,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60B32D27_7387_ED0F_41BF_603326807E99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 2.37,
   "hfov": 18.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 7.76,
   "distance": 50
  }
 ],
 "id": "overlay_60C08710_7386_3D01_41D8_802DDA2ABFE7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 7.76,
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_658D1856_73FA_1301_4190_856B09C68960",
   "yaw": -90.69,
   "hfov": 10.68,
   "pitch": -34.15,
   "distance": 100
  }
 ],
 "id": "overlay_60055118_739A_7502_41D3_61F460BC0FA5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -90.69,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Executive Block"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": -85.26,
   "distance": 50
  }
 ],
 "id": "overlay_6007896C_739A_1502_41CD_7FD3FE439923",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -85.26,
   "hfov": 21.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_658CB856_73FA_1301_41D0_4018981866BA",
   "yaw": -90.69,
   "hfov": 10.68,
   "pitch": -34.15,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60CC96D9_739E_1F03_41D9_4C93F3692526",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -90.69,
   "hfov": 10.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_658C7856_73FA_1301_41D8_BAAF9FB8A686",
   "yaw": 93.06,
   "hfov": 13,
   "pitch": -31.89,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60C10E25_739E_2F03_41D2_5925423BCC6E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 93.06,
   "hfov": 13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Admin Block"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 111.86,
   "distance": 50
  }
 ],
 "id": "overlay_6020FD7C_739E_2D02_41DC_0E326E97C3E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 111.86,
   "hfov": 40.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511A2363_73BE_1507_41B0_927AAFAB7F41",
   "yaw": -178.16,
   "hfov": 8.7,
   "pitch": -18.21,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_682C7AE3_738A_1707_41D1_84F8F41D3156",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -178.16,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 15.32,
   "distance": 50
  }
 ],
 "id": "overlay_67B5F0A0_738E_1301_41CD_2E31C8CA7B3E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 15.32,
   "hfov": 35.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5AE7F5C6_7EDA_39FE_41C2_51DD52FA9AF3",
   "yaw": 0.46,
   "hfov": 8.39,
   "pitch": -28.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6069C7B5_738E_1D03_41BB_A4F769B84525",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 0.46,
   "hfov": 8.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1, this.camera_B77294E0_8148_0A25_41AA_B6FC510F44D4); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EECB4FC_740E_1136_41DC_78340B6B9167",
   "yaw": -91.55,
   "hfov": 10,
   "pitch": -15.14,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65D39159_7416_F37E_41C2_99286C66D15A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -91.55,
   "hfov": 10,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Lecture Hall"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_1_0.png",
      "width": 639,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": -19.84,
   "hfov": 18.21,
   "yaw": -87.26,
   "distance": 50
  }
 ],
 "id": "overlay_6688C30A_7416_10D2_4158_B5D735F405CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_1_0_map.gif",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -87.26,
   "hfov": 18.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1, this.camera_B778C4E6_8148_0A2D_41C2_20EE8B940201); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EEDE4FC_740E_1136_41D7_449E724D47CF",
   "yaw": 89.21,
   "hfov": 8.8,
   "pitch": -13.93,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65CD16CB_741A_1153_41C7_ABAF9F487FD4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.21,
   "hfov": 8.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Lecture Hall"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_3_0.png",
      "width": 829,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": -17.72,
   "hfov": 23.9,
   "yaw": 96.61,
   "distance": 50
  }
 ],
 "id": "overlay_6622E9A3_741B_F3D2_41BC_AA16C865E2FC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_3_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 96.61,
   "hfov": 23.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EED74FD_740E_1136_41C5_9333FF4E2F8D",
   "yaw": 1.28,
   "hfov": 22.71,
   "pitch": -26.16,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6773AC54_741A_3176_41C6_9E199012C7B5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 1.28,
   "hfov": 22.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9, this.camera_B7B0D4B9_8148_0A27_41C0_8F2938A8A395); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EEEF4FD_740E_1136_41BB_8C88B15C2DD6",
   "yaw": 87.32,
   "hfov": 12.49,
   "pitch": -11.41,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_61D070EF_740E_1152_41C7_708067503AE4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 87.32,
   "hfov": 12.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4796CD6E_740A_1352_41D4_C625B7FFC7A8",
   "yaw": 154.78,
   "hfov": 10.32,
   "pitch": -9.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_53B56F5B_747B_EF72_41C8_D7AC8F46C7E0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 154.78,
   "hfov": 10.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AA4568_743F_F35E_41D0_33F045DD0178",
   "yaw": -118.75,
   "hfov": 15.48,
   "pitch": -16.74,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_420CB27C_740E_1136_41B5_8E6A8A021D5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -118.75,
   "hfov": 15.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AA2568_743F_F35E_41DC_3D915859245B",
   "yaw": -90.11,
   "hfov": 7.02,
   "pitch": -5.64,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4FBAE6BF_740E_3132_41D8_1CB873CE046A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.11,
   "hfov": 7.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48ABF568_743F_F35E_41D0_9D6AD51BD13D",
   "yaw": 108.18,
   "hfov": 12.55,
   "pitch": -10.25,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4958D4AA_7409_F1D2_41DA_3C1CD520C950",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 108.18,
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Computer Lab"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_3_0.png",
      "width": 477,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ]
   },
   "pitch": -14.4,
   "hfov": 13.99,
   "yaw": 114.08,
   "distance": 50
  }
 ],
 "id": "overlay_4EFC36AC_740A_11D6_41B6_445DDCBE24F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_3_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 114.08,
   "hfov": 13.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "hfov": 6.68
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_561DA61A_7476_10F2_41B9_710871B477CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 3.54,
   "hfov": 6.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_478E6D5D_740A_1376_41D7_D68E2D935592",
   "yaw": -84.04,
   "hfov": 9.85,
   "pitch": -17.39,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_506C593F_747A_3332_41D4_1B4DA946C1D1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -84.04,
   "hfov": 9.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_478DFD5D_740A_1376_41C0_D5506679CFF5",
   "yaw": 88.7,
   "hfov": 9.47,
   "pitch": -14.1,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_50C72282_747A_11D2_41CE_66B88890ABFB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 88.7,
   "hfov": 9.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EF4A4F5_740E_1136_418F_C1B399358234",
   "yaw": 0.4,
   "hfov": 10.71,
   "pitch": -19.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60419F79_7416_EF3F_41C4_BCA8B8B8A714",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.4,
   "hfov": 10.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4C491C_737E_F502_41D9_777494660AF3, this.camera_B79854D3_8148_0A6B_4184_825FFEE0FF85); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EF474F5_740E_1136_41D8_278AC4DF4CAC",
   "yaw": 63.75,
   "hfov": 10.82,
   "pitch": -15.76,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6CDE63FE_7416_3735_41D6_485C40824A6F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 63.75,
   "hfov": 10.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4C491C_737E_F502_41D9_777494660AF3, this.camera_B786A4D9_8148_0A67_41DD_3908F65C3E5B); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EF5F4F5_740E_1136_41D0_851F1F46E372",
   "yaw": -61.25,
   "hfov": 10.51,
   "pitch": -17.94,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_62922FBA_7416_6F32_41AD_32787F88FEA6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -61.25,
   "hfov": 10.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AB6569_743F_F35E_41C4_DD2560FF0F46",
   "yaw": 161.21,
   "hfov": 19.93,
   "pitch": -4.82,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4E4BFF96_7436_2FF5_4143_481D7EE9DEA2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 161.21,
   "hfov": 19.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_57481209_7386_F702_41B6_3BE7656409DF",
   "yaw": -150.95,
   "hfov": 13.18,
   "pitch": -12.68,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5091B678_738A_1F02_41D5_66735C77F911",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.95,
   "hfov": 13.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E9FC8E7_741E_3153_41B9_3EBDA6ECEA39",
   "yaw": 5.25,
   "hfov": 19.03,
   "pitch": 0.28,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_35C87467_743A_1153_41CB_4136AF0FFE10",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.25,
   "hfov": 19.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0_HS_1_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ]
   },
   "pitch": -3.49,
   "hfov": 15.53,
   "yaw": 19.26,
   "distance": 50
  }
 ],
 "id": "overlay_37C1AB1E_743A_10F2_41B2_C1E07A8BBC99",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0_HS_1_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 19.26,
   "hfov": 15.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4795DD6E_740A_1352_41D3_5213B8516596",
   "yaw": -22.99,
   "hfov": 18.16,
   "pitch": -18.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5C98044F_7476_3152_41C9_33960F237160",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -22.99,
   "hfov": 18.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47956D6E_740A_1352_41A3_4027C5DCA467",
   "yaw": 67.27,
   "hfov": 21.04,
   "pitch": -53.17,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5DE4C74F_7476_3F53_41D2_0576FC593E13",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 67.27,
   "hfov": 21.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6871388E_738E_331E_41D5_46BF7B934DEB",
   "yaw": 105.51,
   "hfov": 10.36,
   "pitch": -13.49,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65352748_738A_1D01_41B1_EB7BB12CF284",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 105.51,
   "hfov": 10.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_57778209_7386_F702_41B0_35407C42F3BA",
   "yaw": -8.58,
   "hfov": 11.21,
   "pitch": -14.57,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_52E23B1C_738A_3502_41D3_C40C081FAA7F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -8.58,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_57484209_7386_F702_41C9_BF21ACE51170",
   "yaw": 57.78,
   "hfov": 14.53,
   "pitch": -36.15,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_520109A8_738E_1501_41C6_A9AEC2763674",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 57.78,
   "hfov": 14.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Physiology LAB"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_2_0.png",
      "width": 830,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ]
   },
   "pitch": -44.69,
   "hfov": 17.86,
   "yaw": 59.23,
   "distance": 50
  }
 ],
 "id": "overlay_5239DBD0_738E_3502_41AB_A531B954A028",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_2_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 59.23,
   "hfov": 17.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B, this.camera_B7AC94CD_8148_0A7F_41BA_BE7616816F98); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B89D2E9_7EDE_3BB3_4185_1217A1F8D082",
   "yaw": -52.01,
   "hfov": 20.18,
   "pitch": -12.25,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6BE4C3B1_73FE_3502_41A0_4F2F1478F019",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -52.01,
   "hfov": 20.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Backyard"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": -51.77,
   "distance": 50
  }
 ],
 "id": "overlay_6622AA41_73FE_3702_41C2_99AF7D908671",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -51.77,
   "hfov": 23.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F519537_737E_3D0F_4194_1A329B5F44A1, this.camera_B7BBE4BF_8148_0A1B_41D0_03AA859DF66E); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_699A56A1_7436_31CE_41D7_8A91E530DBCB",
   "yaw": 45.9,
   "hfov": 11.13,
   "pitch": -11.95,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6FCEE5EE_740A_1352_41C0_1D2B9FEA5C6A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 45.9,
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_537197C8_739B_FD02_41B8_74017C96091D",
   "yaw": -71.32,
   "hfov": 21.06,
   "pitch": -29.05,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6F6BED07_739E_6D0F_41CE_01FBB7934978",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -71.32,
   "hfov": 21.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B84E2E8_7EDE_3BB1_41D8_445EFD3C587A",
   "yaw": 1.79,
   "hfov": 10.56,
   "pitch": -32.3,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_7C09AF5F_739E_2D3E_41D6_77BF5E329F2B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 1.79,
   "hfov": 10.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Auditorium"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8BF2E8_7EDE_3BB1_41D6_6A7A33061626",
   "yaw": -43.13,
   "hfov": 8.96,
   "pitch": -28.07,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_63C4FABF_738E_177E_41D9_41CEB60671ED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -43.13,
   "hfov": 8.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "CAFETERIA"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": -58.66,
   "distance": 50
  }
 ],
 "id": "overlay_6125401F_738A_333F_41B0_A3C09EDE79AC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -58.66,
   "hfov": 8.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "MAIN ENTERENCE"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 2.36,
   "distance": 50
  }
 ],
 "id": "overlay_628B64ED_7386_7303_41C8_B9339F20EB6A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 2.36,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8B42E9_7EDE_3BB3_41C5_D4F4B5723319",
   "yaw": -63.84,
   "hfov": 11.38,
   "pitch": -23.25,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66D425EB_73BA_1D06_41A5_E812C591A8E4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -63.84,
   "hfov": 11.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "AUDITORIUM"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": -44.9,
   "distance": 50
  }
 ],
 "id": "overlay_6147CF2F_73BA_6D1F_41D1_3D28E070516A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -44.9,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Football Court"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 33.97,
   "distance": 50
  }
 ],
 "id": "overlay_61B94B77_7386_150E_41DB_E172ED6FFD80",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 33.97,
   "hfov": 11.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8A12E9_7EDE_3BB3_41AB_81B7FA842F50",
   "yaw": 33.56,
   "hfov": 13.08,
   "pitch": -9.61,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_618A6F00_738A_2D02_41C1_F1F2A5FA5576",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 33.56,
   "hfov": 13.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5B8A62E9_7EDE_3BB3_41D1_D827034D296C",
   "yaw": 49.14,
   "hfov": 12.55,
   "pitch": -22.92,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60FF7362_738E_1506_41DB_73D61F91B2A7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 49.14,
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Backyard "
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 56.36,
   "distance": 50
  }
 ],
 "id": "overlay_62569AF1_738E_3702_41C4_72E89293626D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 56.36,
   "hfov": 7.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48ABC568_743F_F35E_41C9_37DB3F61E8AB",
   "yaw": 96.91,
   "hfov": 21.62,
   "pitch": -15.6,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4C07EB5C_740A_F776_41C8_008B1313331C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 96.91,
   "hfov": 21.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48ABA569_743F_F35E_41A2_6B476E17BE89",
   "yaw": -102.97,
   "hfov": 22.35,
   "pitch": -15.06,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4CB3874F_7436_3F52_41B3_1BBE0148FD24",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -102.97,
   "hfov": 22.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_2_0.png",
      "width": 519,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "pitch": -15.54,
   "hfov": 15.13,
   "yaw": 114.75,
   "distance": 50
  }
 ],
 "id": "overlay_4F2541ED_743E_7356_41B5_CD2E86DC4016",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_2_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 114.75,
   "hfov": 15.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6870B88F_738E_331E_41C8_15DD71A22079",
   "yaw": -169.87,
   "hfov": 11.94,
   "pitch": -19.79,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_652F66F4_738E_1F02_41CD_DA4A83530975",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -169.87,
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_537017C8_739B_FD02_41D1_55EA2817764F",
   "yaw": -16.75,
   "hfov": 10.73,
   "pitch": -13.15,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_68E67F8F_739A_ED1F_4181_5F549C460B81",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.75,
   "hfov": 10.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Conference Hall"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_2_0.png",
      "width": 1194,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ]
   },
   "pitch": 15.77,
   "hfov": 34.78,
   "yaw": -5.3,
   "distance": 50
  }
 ],
 "id": "overlay_6ABFA57B_739A_7D06_4195_41BC1A32CAA2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_2_0_map.gif",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -5.3,
   "hfov": 34.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47965D6E_740A_1352_41CF_8F25CB685C81",
   "yaw": 38.75,
   "hfov": 8.5,
   "pitch": -6.56,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5CCF0547_747A_1353_41B4_133B2DC83566",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 38.75,
   "hfov": 8.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD9A4B5_737E_3302_419B_52FB8B8912F5",
   "yaw": -43.76,
   "hfov": 11.64,
   "pitch": -14.13,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5F8B9A4B_738A_F707_41D3_9C89F562A59B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -43.76,
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD974B5_737E_3302_41D5_7AF608613B16",
   "yaw": 42.09,
   "hfov": 9.99,
   "pitch": -12.67,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5F737F8B_738A_6D07_41B3_912A47850D7A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 42.09,
   "hfov": 9.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD904B5_737E_3302_41C1_205DDA0A5682",
   "yaw": 118.8,
   "hfov": 13.76,
   "pitch": -22.18,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5B1C5656_7379_FF0E_41D4_41E4011FC267",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 118.8,
   "hfov": 13.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD924B5_737E_3302_4193_5DD8B6378E3E",
   "yaw": -121.84,
   "hfov": 14.76,
   "pitch": -24.58,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_59BEF8BB_737A_1306_41D7_BE6B0A0E94AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -121.84,
   "hfov": 14.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47AC4E05_748E_EF02_41C9_DDCC954BAD6B",
   "yaw": -179.22,
   "hfov": 9.8,
   "pitch": -17.9,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5DE6A688_737A_1F01_41C1_7AF412E06173",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -179.22,
   "hfov": 9.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E84D8EE_741E_3152_41D5_B80EC3714B63",
   "yaw": 74.2,
   "hfov": 22.88,
   "pitch": -24.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4B156D8E_7437_F3D2_41AF_EDA112C9F0B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 74.2,
   "hfov": 22.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47A39E05_748E_EF02_41CD_175F1E32CB6D",
   "yaw": -93.63,
   "hfov": 31.96,
   "pitch": -31.67,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_58AA1902_7486_1506_41B6_C44D348272AF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -93.63,
   "hfov": 31.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47A23E05_748E_EF02_41C9_9189BE45ADC8",
   "yaw": 92.15,
   "hfov": 16.23,
   "pitch": -15.74,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_59619E5C_748E_2F01_41C0_BB6C9B134069",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.15,
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "EXIT"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_513F4154_7436_F376_41D7_C67F5B6A3509",
   "yaw": 131.09,
   "hfov": 19.85,
   "pitch": -38.4,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6A0DF7AA_743A_1FD2_419B_2B827CCEBA3D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 131.09,
   "hfov": 19.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511BB363_73BE_1506_41D1_EB2616C4E921",
   "yaw": 173.37,
   "hfov": 16.67,
   "pitch": -7.39,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6E2300D8_738A_1301_41D5_CDA5E4B359B1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 173.37,
   "hfov": 16.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511B4363_73BE_1506_41A7_D2CF45E9DA92",
   "yaw": -73.12,
   "hfov": 12.06,
   "pitch": -15.84,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_534087FF_738A_3CFE_41D7_8E8F61E182C3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -73.12,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5749D20A_7386_F706_41C1_3574BBAC57CF",
   "yaw": 74.78,
   "hfov": 9.16,
   "pitch": -12.03,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_577A75E7_7386_3D0F_41D9_D45471705A5F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 74.78,
   "hfov": 9.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Patio"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4743F7CC_741E_3F56_41C4_7E781387D881",
   "yaw": -22.14,
   "hfov": 7.75,
   "pitch": -7.79,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_558D630C_7386_1501_41CE_55122EBC78FA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -22.14,
   "hfov": 7.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Patio"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_474267CC_741E_3F56_41BE_0B5C2B45C56C",
   "yaw": 22.41,
   "hfov": 6.54,
   "pitch": -7.52,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_54F5D4F7_7386_130E_41D5_FDE188BBE4BA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 22.41,
   "hfov": 6.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 04a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_474D07CC_741E_3F56_41DC_4326A2A76053",
   "yaw": -0.01,
   "hfov": 13.27,
   "pitch": 3.89,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5878A29C_740E_11F6_41C1_C3847C9885B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -0.01,
   "hfov": 13.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "hfov": 18.83
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_58442FA6_7419_EFD2_41AA_0F539FCA0BC0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -1.07,
   "hfov": 18.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 56.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_513C1154_7436_F376_41D8_CE1F9A54900D",
   "yaw": 92.74,
   "hfov": 17.35,
   "pitch": -20.09,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_68B6C758_743E_1F7E_41D5_8C2984335071",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 92.74,
   "hfov": 17.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_513CC154_7436_F376_41D8_C363D3C7FEA3",
   "yaw": 147.44,
   "hfov": 18.54,
   "pitch": -41.33,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_55725FF3_743E_2F32_41A1_4817849C981C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 147.44,
   "hfov": 18.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "up"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47995D66_740A_1352_41C5_E0FB3EB5915E",
   "yaw": 7.63,
   "hfov": 25.91,
   "pitch": -6.26,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_54C2D5D6_740A_3372_41C6_A2DDF7EDC759",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 7.63,
   "hfov": 25.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_65926855_73FA_1303_41C1_F80EB26EDC58",
   "yaw": 89.98,
   "hfov": 9.56,
   "pitch": -12.38,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_67976942_738A_7506_41DB_DF9611AD6CC9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 89.98,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Main Enterance"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 93.7,
   "distance": 50
  }
 ],
 "id": "overlay_6712C0A5_738A_3302_41B7_0528811FCBB5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 93.7,
   "hfov": 18.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7F4F3D02_737E_6D06_41C5_0392E6874303, this.camera_B7A6B4C5_8148_0A6F_41B1_E84BD23F9A73); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_65921855_73FA_1303_41DB_14CB86643E93",
   "yaw": -33.57,
   "hfov": 9.95,
   "pitch": -8.48,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_671D6BB6_73FA_150E_41DC_B9E06BD39783",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -33.57,
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Football Court"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": -18.9,
   "distance": 50
  }
 ],
 "id": "overlay_66931BC0_73FA_F502_41C8_6EF537E2C96C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -18.9,
   "hfov": 38.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "BACK TO GROUND FLOOR"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A843F4E_7416_EF52_41B1_CAA16821C282",
   "yaw": -60.26,
   "hfov": 16.4,
   "pitch": -23.11,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_45D7EF8F_741A_2FD2_41D2_F17C9C4594EA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -60.26,
   "hfov": 16.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A84AF4E_7416_EF52_41C2_F6B3489784FC",
   "yaw": -169.02,
   "hfov": 16.85,
   "pitch": -19.67,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_45971658_741A_117E_41D0_C9075FE4B0F7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -169.02,
   "hfov": 16.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A872F4E_7416_EF52_41D3_4E85CB015D1F",
   "yaw": 46.93,
   "hfov": 18.49,
   "pitch": -14,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_40E05B75_741A_1736_41C1_2DFF72D76F8C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 46.93,
   "hfov": 18.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_3_0.png",
      "width": 978,
      "class": "ImageResourceLevel",
      "height": 903
     }
    ]
   },
   "pitch": 15.5,
   "yaw": 116.63,
   "hfov": 28.53
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_47849FFC_7419_EF35_41C7_5F3B9B5A3A8D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 116.63,
   "hfov": 28.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 15.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A865F50_7416_EF4D_41B2_B39A0DA383F1",
   "yaw": -122.66,
   "hfov": 16.15,
   "pitch": -13.91,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_41D2E573_7416_1332_41DC_F8D3985CECDD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -122.66,
   "hfov": 16.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4A86EF50_7416_EF4D_41DB_A6A0E0C2F4A4",
   "yaw": -1.88,
   "hfov": 15.17,
   "pitch": -11.46,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_42664E1C_7416_10F6_4198_3CA3C025830C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.88,
   "hfov": 15.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_6_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 337
     }
    ]
   },
   "pitch": 5.96,
   "yaw": -36.19,
   "hfov": 8.82
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3469A946_740A_7352_41DB_EDAEE6DDA4E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": -36.19,
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Forensic Museum"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_7_0.png",
      "width": 644,
      "class": "ImageResourceLevel",
      "height": 144
     }
    ]
   },
   "pitch": 0.26,
   "hfov": 19.48,
   "yaw": -31.88,
   "distance": 50
  }
 ],
 "id": "overlay_34193793_740A_3FF2_41C1_5F12100EF637",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_7_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -31.88,
   "hfov": 19.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AA9568_743F_F35E_41D9_ED5213DF7AAA",
   "yaw": -10.19,
   "hfov": 15.37,
   "pitch": -12.02,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_41A2488E_740A_11D2_41D2_0472100E2349",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.19,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AA6568_743F_F35E_41C3_755DFBE19ACC",
   "yaw": -107.18,
   "hfov": 23.03,
   "pitch": -20.21,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_43C59350_740A_174E_41D6_83D0EC5785F5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -107.18,
   "hfov": 23.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EFBE4F5_740E_1136_41D7_B2CA84AFB379",
   "yaw": -34.74,
   "hfov": 17.91,
   "pitch": -10.84,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66C261E4_740E_7356_41C0_B28DD484F096",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -34.74,
   "hfov": 17.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EFB64F5_740E_1136_41D6_B4CAB15250E4",
   "yaw": 36.5,
   "hfov": 15.39,
   "pitch": -10.96,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65EF23E3_740A_1752_41C7_0B8FD545F8F8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 36.5,
   "hfov": 15.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6EFB14F5_740E_1136_41D6_BC06C41E712E",
   "yaw": 172.41,
   "hfov": 19.88,
   "pitch": -16.21,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_671EBEAD_7409_F1D6_41CD_F7212C7BBA7D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 172.41,
   "hfov": 19.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51252151_7436_F34E_41CD_496DC0E48DE0",
   "yaw": -90.49,
   "hfov": 11.86,
   "pitch": -10.53,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6ED66501_7436_30CE_41CE_131CE5940867",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.49,
   "hfov": 11.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5125B151_7436_F34E_41C4_E26D5A4FA418",
   "yaw": 89.82,
   "hfov": 13.33,
   "pitch": -17.72,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6FA1E7F1_743A_1F4E_41BC_A1A509A3F7CE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_5_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.82,
   "hfov": 13.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AB156A_743F_F352_41B9_C45E511E13B2",
   "yaw": -36.55,
   "hfov": 18.46,
   "pitch": -9.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_497FF656_743A_3172_41B9_2C197E7BC5B4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -36.55,
   "hfov": 18.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5FD864B4_737E_3302_41AC_7F7F9C792FE1",
   "yaw": 52,
   "hfov": 26.4,
   "pitch": -26.06,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_58ECBF1A_737E_6D01_41DB_493201319C26",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 52,
   "hfov": 26.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
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
   "yaw": 1.66,
   "distance": 50
  }
 ],
 "id": "overlay_60658240_7386_3702_41C8_0F6AEC5BAAD8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 1.66,
   "hfov": 12.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_65914855_73FA_1303_41C4_F10E3A7D9A07",
   "yaw": -0.77,
   "hfov": 11.49,
   "pitch": -8.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6002A2BA_7386_1701_41CF_F9725C347840",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -0.77,
   "hfov": 11.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_3E8748EE_741E_3152_41A6_C64DC3D658E2",
   "yaw": 33.54,
   "hfov": 13.27,
   "pitch": -9.92,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_346568F1_740E_314E_41DC_9B821A651638",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 33.54,
   "hfov": 13.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_511F2362_73BE_1501_41D8_A579B88B6480",
   "yaw": 0.75,
   "hfov": 11.73,
   "pitch": -10.9,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6EEAD4D4_7386_1301_41D9_0A22EF4D9A39",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 0.75,
   "hfov": 11.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "BIOCHEMISTRY LAB"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_1_0.png",
      "width": 1711,
      "class": "ImageResourceLevel",
      "height": 256
     }
    ]
   },
   "pitch": -50.61,
   "hfov": 32.84,
   "yaw": -78.57,
   "distance": 50
  }
 ],
 "id": "overlay_6DD27E2C_7386_2F01_41D4_BE5038CB86A3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_1_0_map.gif",
      "width": 106,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -78.57,
   "hfov": 32.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -50.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_51189362_73BE_1501_4194_D0D049EA077E",
   "yaw": -88.89,
   "hfov": 16.37,
   "pitch": -39.01,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6EA0ADF9_73BA_2D03_417F_E7F51694D1E6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -88.89,
   "hfov": 16.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47902D6D_740A_1356_41D4_587CA9D5D1B3",
   "yaw": 84.78,
   "hfov": 14.43,
   "pitch": -18.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_51AD1BF9_747F_F73F_41AD_0BBE8646155C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": 84.78,
   "hfov": 14.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4797BD6E_740A_1352_41D8_BB7F30F93FE8",
   "yaw": -0.38,
   "hfov": 14.46,
   "pitch": -36.77,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_52B411E2_747E_3352_41CF_000D4604144F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -0.38,
   "hfov": 14.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47973D6E_740A_1352_41D1_48C469B0FD85",
   "yaw": -156.79,
   "hfov": 14.18,
   "pitch": -61.71,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_52ECD5D0_747A_134E_41D3_D60286E1FDAA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -156.79,
   "hfov": 14.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -61.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06b Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_48AB4569_743F_F35E_41DC_1742DC71DEFF",
   "yaw": -145,
   "hfov": 22.18,
   "pitch": -2.18,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_4FF77276_743A_3132_41CE_00130B654669",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
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
   "yaw": -145,
   "hfov": 22.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.18
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD8A4B4_737E_3302_41D8_319062C470ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F53B83D_737E_3303_41D7_800E821D2255_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51185362_73BE_1501_41C2_6436667FB6F1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F57C68C_737E_1F01_41DA_1D59AB75D0E8_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_658DB856_73FA_1301_4191_007BCF33A521",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_658D1856_73FA_1301_4190_856B09C68960",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_658CB856_73FA_1301_41D0_4018981866BA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_658C7856_73FA_1301_41D8_BAAF9FB8A686",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_511A2363_73BE_1507_41B0_927AAFAB7F41",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F50BAE3_737E_1707_4148_3BE14F7943B4_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5AE7F5C6_7EDA_39FE_41C2_51DD52FA9AF3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DE00B_737E_F306_41D7_FF0DB4174563_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EECB4FC_740E_1136_41DC_78340B6B9167",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EEDE4FC_740E_1136_41D7_449E724D47CF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EED74FD_740E_1136_41C5_9333FF4E2F8D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F519537_737E_3D0F_4194_1A329B5F44A1_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EEEF4FD_740E_1136_41BB_8C88B15C2DD6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4C491C_737E_F502_41D9_777494660AF3_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4796CD6E_740A_1352_41D4_C625B7FFC7A8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55662C59_741A_317E_41CA_F993B7EE3874_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AA4568_743F_F35E_41D0_33F045DD0178",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AA2568_743F_F35E_41DC_3D915859245B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48ABF568_743F_F35E_41D0_9D6AD51BD13D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55652BE4_741A_1756_41C2_D9006945E09F_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_478E6D5D_740A_1376_41D7_D68E2D935592",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_478DFD5D_740A_1376_41C0_D5506679CFF5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7EE4C5AA_737E_1D01_41C3_5FFEBE7A5E4F_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EF4A4F5_740E_1136_418F_C1B399358234",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EF474F5_740E_1136_41D8_278AC4DF4CAC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EF5F4F5_740E_1136_41D0_851F1F46E372",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65436B_737E_1506_41B3_7984EDA7AFB9_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AB6569_743F_F35E_41C4_DD2560FF0F46",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55680E32_741A_3132_4184_DD9E6C977004_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_57481209_7386_F702_41B6_3BE7656409DF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5514FD_737F_F303_41C6_9367D95768ED_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E9FC8E7_741E_3153_41B9_3EBDA6ECEA39",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565CD85_741A_73D7_41D7_C77B57DF0B70_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4795DD6E_740A_1352_41D3_5213B8516596",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47956D6E_740A_1352_41A3_4027C5DCA467",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A0234E_7416_3752_4194_2188873BB455_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6871388E_738E_331E_41D5_46BF7B934DEB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5301E1_737E_3503_41D2_E4A401E65151_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_57778209_7386_F702_41B0_35407C42F3BA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_57484209_7386_F702_41C9_BF21ACE51170",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F55DC4C_737E_1302_41BB_195A01AA4710_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B89D2E9_7EDE_3BB3_4185_1217A1F8D082",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4F3D02_737E_6D06_41C5_0392E6874303_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_699A56A1_7436_31CE_41D7_8A91E530DBCB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F521E34_737E_2F02_41C8_EEC9EB498EE1_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_537197C8_739B_FD02_41B8_74017C96091D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51B3AA_737E_1501_41D4_77052DD57D26_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B84E2E8_7EDE_3BB1_41D8_445EFD3C587A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B8BF2E8_7EDE_3BB1_41D6_6A7A33061626",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B8B42E9_7EDE_3BB3_41C5_D4F4B5723319",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B8A12E9_7EDE_3BB3_41AB_81B7FA842F50",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_7_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5B8A62E9_7EDE_3BB3_41D1_D827034D296C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F65669E_737E_7F01_41D8_A4E55664F66F_0_HS_8_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48ABC568_743F_F35E_41C9_37DB3F61E8AB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48ABA569_743F_F35E_41A2_6B476E17BE89",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556414ED_741A_3156_4158_568C72D095C6_0_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6870B88F_738E_331E_41C8_15DD71A22079",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_537017C8_739B_FD02_41D1_55EA2817764F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F51DABC_737E_3702_41D3_EA75A59D4791_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47965D6E_740A_1352_41CF_8F25CB685C81",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57DDB99A_7416_13FD_41A1_C68360D1E941_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD9A4B5_737E_3302_419B_52FB8B8912F5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD974B5_737E_3302_41D5_7AF608613B16",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD904B5_737E_3302_41C1_205DDA0A5682",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD924B5_737E_3302_4193_5DD8B6378E3E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47AC4E05_748E_EF02_41C9_DDCC954BAD6B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4DAE6D_737E_2F03_41BD_A1A66C5DB2D6_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E84D8EE_741E_3152_41D5_B80EC3714B63",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55AE9E23_7416_30D2_41D0_1FD1493B278C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47A39E05_748E_EF02_41CD_175F1E32CB6D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47A23E05_748E_EF02_41C9_9189BE45ADC8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66A4DC_737E_3301_41D5_645A2B7FE7A9_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_513F4154_7436_F376_41D7_C67F5B6A3509",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5613B8_737E_1501_41D1_0B030C3DCE36_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_511BB363_73BE_1506_41D1_EB2616C4E921",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_511B4363_73BE_1506_41A7_D2CF45E9DA92",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5749D20A_7386_F706_41C1_3574BBAC57CF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4743F7CC_741E_3F56_41C4_7E781387D881",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_474267CC_741E_3F56_41BE_0B5C2B45C56C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_474D07CC_741E_3F56_41DC_4326A2A76053",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F66C81D_737E_1303_41B9_140893ED9A40_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 510
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_513C1154_7436_F376_41D8_CE1F9A54900D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_513CC154_7436_F376_41D8_C363D3C7FEA3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47995D66_740A_1352_41C5_E0FB3EB5915E",
 "frameDuration": 58,
 "levels": [
  {
   "url": "media/panorama_7F564B07_737E_750E_41C4_C63E4A334F67_0_HS_2_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_65926855_73FA_1303_41C1_F80EB26EDC58",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_65921855_73FA_1303_41DB_14CB86643E93",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5286EE_737E_1F1E_41D5_1753836FE89B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4A843F4E_7416_EF52_41B1_CAA16821C282",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4A84AF4E_7416_EF52_41C2_F6B3489784FC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4A872F4E_7416_EF52_41D3_4E85CB015D1F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4A865F50_7416_EF4D_41B2_B39A0DA383F1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4A86EF50_7416_EF4D_41DB_A6A0E0C2F4A4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565F7E1_741A_1F4F_41DA_2388ED046FEE_0_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AA9568_743F_F35E_41D9_ED5213DF7AAA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AA6568_743F_F35E_41C3_755DFBE19ACC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5565E30D_741A_10D6_41CF_E95F0043A514_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EFBE4F5_740E_1136_41D7_B2CA84AFB379",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EFB64F5_740E_1136_41D6_B4CAB15250E4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6EFB14F5_740E_1136_41D6_BC06C41E712E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51252151_7436_F34E_41CD_496DC0E48DE0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5125B151_7436_F34E_41C4_E26D5A4FA418",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F4FEA19_737E_3703_41B2_1B74E727D83B_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AB156A_743F_F352_41B9_C45E511E13B2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55681365_741A_7756_41DB_6DE163FFE094_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5FD864B4_737E_3302_41AC_7F7F9C792FE1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F5A00C6_737E_1301_41D7_D8301CB692E5_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_65914855_73FA_1303_41C4_F10E3A7D9A07",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F652082_737E_3301_41D4_AEB36A0D9E66_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3E8748EE_741E_3152_41A6_C64DC3D658E2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55A3C8DB_7416_1172_41D5_CDC69660D50E_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_511F2362_73BE_1501_41D8_A579B88B6480",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51189362_73BE_1501_4194_D0D049EA077E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7F517DFA_737F_ED06_4165_F2A60404662C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47902D6D_740A_1356_41D4_587CA9D5D1B3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_4797BD6E_740A_1352_41D8_BB7F30F93FE8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_47973D6E_740A_1352_41D1_48C469B0FD85",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_55654213_741A_30F2_41DD_060A59A7F8ED_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_48AB4569_743F_F35E_41DC_1742DC71DEFF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_556808CF_741A_1152_41D3_509F15D71B1F_0_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
}],
 "desktopMipmappingEnabled": false
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
