(function(){
    var script = {
 "verticalAlign": "top",
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.thumbnaillist5245",
  "this.IconButton_6AE978CA_787E_0A10_41B0_794731B7E92B",
  "this.IconButton_6AE5F109_7842_1A10_41CA_AC11BD658C05",
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
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "vfov": 180,
 "label": "Accident and Emergency Ward",
 "id": "panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_672B5E2F_7D52_7D54_41CB_7D85E0BC9C44",
  "this.overlay_686F8B27_7DC0_E6D2_41D6_DA20D972682C"
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
 "id": "panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 47.77,
  "class": "PanoramaCameraPosition",
  "pitch": 6.79
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881"
  }
 ],
 "vfov": 180,
 "label": "Main Lobby",
 "id": "panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_68252691_7D7E_ED4D_41D9_ADB84AE2D91F",
  "this.overlay_6EAB6A41_7D71_A5CD_41D8_736AF0785336",
  "this.overlay_6BC3EC3D_7DC0_A336_41D3_D6368ABEE2A0",
  "this.overlay_6B36C451_7E5A_7E93_41DE_306DD4ABD0D5",
  "this.overlay_687C2112_7E66_3691_41D6_8A8B27DEC8C2",
  "this.overlay_6420C5CE_7E66_79F1_41DE_1AE61F34980D",
  "this.overlay_64E472E1_7E7A_5BB2_41C8_B51D600BCE59"
 ],
 "hfovMax": 138
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B"
  }
 ],
 "vfov": 180,
 "label": "Arif Memorial Aerial",
 "id": "panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_7286FD31_7D71_BF4D_41C4_E508E3B2AF25",
  "this.overlay_6D55527B_7D7E_65BD_41AF_7FC307F8A56E",
  "this.overlay_652E4887_7DC7_A3D2_41DD_7DC5ED4977F0",
  "this.overlay_6BC7DF9C_7DC7_FDF6_41C1_FAE3EC52886F"
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
 "id": "panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.28,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 2
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
 "class": "Panorama",
 "label": "Operation Theater",
 "thumbnailUrl": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6AA978A2_7E5A_37B1_41CF_D8BDFB710A4A",
  "this.overlay_6B04A2F7_7E5B_FB9F_41D2_20800EEEC854"
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
 "id": "panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.41,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 0.49
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "vfov": 180,
 "label": "Blood Lab and Blood Bank",
 "id": "panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_71671843_7E26_56F7_417C_A5D772124356"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
 "class": "Panorama",
 "label": "CT SCAN",
 "thumbnailUrl": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_689BA4AB_7D52_6D5D_41BE_2D1C15A0EC03"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
 "class": "Panorama",
 "label": "Radiology Enterance",
 "thumbnailUrl": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_691DB5F8_7D52_AEBB_41D1_268A93FF1AC5",
  "this.overlay_65A0187C_7D52_65BB_41D6_8E93CFCA67BE",
  "this.overlay_6B2A779A_7D52_6B7F_41D7_766576D6C7C9",
  "this.overlay_64469F86_7D53_9B57_41D1_A6173291657F",
  "this.overlay_648BC1CE_7DC0_6552_41B3_3292F286C92A",
  "this.overlay_68B8733D_7DC7_A536_41D0_AD01C9C74572",
  "this.overlay_685C1FA0_7DC0_BDCE_41CA_1FEA95FF4F41"
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
 "id": "panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.99,
  "class": "PanoramaCameraPosition",
  "pitch": -1.24
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530"
  }
 ],
 "vfov": 180,
 "label": "ICU",
 "id": "panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_73DE91D4_7DC0_A576_41D4_569F9BE19AB0",
  "this.overlay_6B9C536D_7DC0_A556_41CA_F2240982699E",
  "this.overlay_6A720133_7DC0_E532_41B5_95408E105A92"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61"
  }
 ],
 "vfov": 180,
 "label": "Blood Donation Room",
 "id": "panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6C9EAE18_7DC3_9EFE_41CE_8BF8579E48E4",
  "this.overlay_6EA2086F_7DC0_A352_41B3_9DB2BF1DD214",
  "this.overlay_6D6DA080_7DC0_A3CE_41C6_60267BFCCF48",
  "this.overlay_6DB8B579_7DC0_AD3E_41D4_FF7079C5EFBA"
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
 "id": "panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.54,
  "class": "PanoramaCameraPosition",
  "pitch": 13.96
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
 "id": "panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.67,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": -15.23
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
 "id": "panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 49.33,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 2.82
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
 "id": "panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 44.71,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 4.15
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
 "id": "panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.19,
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "pitch": -2.5
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
 "id": "panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 61.9,
  "hfov": 131,
  "class": "PanoramaCameraPosition",
  "pitch": 17.06
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207"
  }
 ],
 "vfov": 180,
 "label": "Physiotherapy Room",
 "id": "panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6088ABCB_7E40_E553_418D_0740B4D0E472",
  "this.overlay_60C21525_7E41_E2D6_41D8_67B547029A5B",
  "this.overlay_60BA9336_7E40_6535_41B6_B783AB590B89",
  "this.overlay_6161710B_7E40_E2D3_41C5_A4B30E803D6C"
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
 "id": "panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 32.39,
  "class": "PanoramaCameraPosition",
  "pitch": 7.17
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
 "id": "panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.79,
  "class": "PanoramaCameraPosition",
  "pitch": 8.43
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "vfov": 180,
 "label": "X-RAY ROOM",
 "id": "panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6B28F308_7D5E_EB5B_41BD_252F880FB4F3"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "vfov": 180,
 "label": "Speech Therapy Room",
 "id": "panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_5E41F33A_7E40_E532_41C0_14B4EBF91805",
  "this.overlay_5F7B6C3B_7E4F_A332_41D4_61A4F3800EEF"
 ],
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
   "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
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
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
 "class": "Panorama",
 "label": "Laboratories",
 "thumbnailUrl": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6CE9A4D1_7DC0_634E_41C0_E244F1BE4B23",
  "this.overlay_6DF1412F_7DC0_62D2_41D1_42FC49B4E527",
  "this.overlay_6E40D8D5_7DC1_E377_41D6_96A12D36A7F9",
  "this.overlay_6C8CCA2D_7DC0_A6D6_41B9_E0D01E4B15CE"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
 "class": "Panorama",
 "label": "Department of Medicine ",
 "thumbnailUrl": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_682A36E6_7DC3_AF52_41D7_DB3D8D2C98B9",
  "this.overlay_6843B683_7DC0_6FD2_41C8_E027366B3262",
  "this.overlay_6A4896FF_7DC0_6F32_41CD_03099B128F34",
  "this.overlay_6A32BCAE_7DC0_A3D2_41D8_722904C88259"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
 "class": "Panorama",
 "label": "PEADS WARD",
 "thumbnailUrl": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_64BFCB62_7D56_9BCF_41B3_5B37CDC6AB7D",
  "this.overlay_67ABDAA2_7DC1_A7D2_41D0_130C857851E7"
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
 "id": "panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 53.47,
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "pitch": 6.52
 }
},
{
 "items": [
  {
   "media": "this.panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
   "camera": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
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
 "id": "panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.06,
  "class": "PanoramaCameraPosition",
  "pitch": -0.16
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
 "id": "panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.19,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
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
 "id": "panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.76,
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "pitch": -24.82
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
 "class": "Panorama",
 "label": "Stage III",
 "thumbnailUrl": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6030BD3E_7DB1_9FB7_41DE_4E89364B17D7"
 ],
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
 "id": "panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.93,
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "pitch": 3.68
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
 "id": "panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 148.66,
  "class": "PanoramaCameraPosition",
  "pitch": 1.22
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  }
 ],
 "vfov": 180,
 "label": "1ST Floor Private Block",
 "id": "panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_72F6A1D0_7DC0_E54E_41CD_9547FF6CFACC",
  "this.overlay_72895683_7DC0_AFD2_41D6_57E7B0EC8389",
  "this.overlay_6BB19F2B_7DCF_9ED3_41DA_7E7AF6E84847",
  "this.overlay_6BDFF338_7DC0_653D_41C8_EB50DA387775",
  "this.overlay_672EB391_7DC0_65CE_41DB_43C7354A7365",
  "this.overlay_6764E76C_7DC1_ED56_41D8_A802136E7210",
  "this.overlay_62C60345_7E40_E556_41D0_CD6B2A64008B",
  "this.overlay_5FD7C453_7E43_E372_41AC_4476F5CC365E",
  "this.overlay_63B9DFF3_7E43_BD32_41D5_D5F6533735C2"
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
 "id": "panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -30.35,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": -19.25
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
 "class": "Panorama",
 "label": "NICU",
 "thumbnailUrl": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_t.jpg",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_654C8C6A_7DBF_9DDF_41C8_02B4AB9E2C1C",
  "this.overlay_72A4F86D_7D92_53D6_41C4_84EEDA2A1E25",
  "this.overlay_6803194A_7DC0_6552_41DF_53505F1B9E93",
  "this.overlay_66004515_7DC0_62F6_4161_88F67DBC430F"
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
 "id": "panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.77,
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "pitch": 7.17
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB"
  }
 ],
 "vfov": 180,
 "label": "Labour Room",
 "id": "panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_66B4B262_7DAE_E5CF_41D7_75DEB149AA7E",
  "this.overlay_616C8DC5_7DAE_BED5_41C0_C57E0C55CFEB",
  "this.overlay_68391E90_7DFF_BFCE_4192_137D67852618",
  "this.overlay_659DF795_7DC0_ADF6_41DC_B9B4EF87DBE3"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "vfov": 180,
 "label": "Ultrasound Room",
 "id": "panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_6B65E93B_7D5E_67BD_41DE_DCC75501D053"
 ],
 "hfovMax": 133
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
 "id": "panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.12,
  "class": "PanoramaCameraPosition",
  "pitch": 2.78
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8"
  }
 ],
 "vfov": 180,
 "label": "ICU Cont.",
 "id": "panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/3/{row}_{column}.jpg",
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
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "height": 4096,
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/3/{row}_{column}.jpg",
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
   "thumbnailUrl": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "overlays": [
  "this.overlay_732146FA_7DC0_6F32_41C9_5A8D3CD00738"
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
 "click": "this.openLink('https://www.google.com/maps/place/Arif+Memorial+Hospital/data=!4m2!3m1!1s0x0:0x134a736b2dbc895a?sa=X&ved=1t:2428&ictx=111', '_blank')",
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
 "click": "this.openLink('https://arifmemorialhospital.com.pk/', '_blank')",
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
   "click": "this.mainPlayList.set('selectedIndex', 2)",
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
   "image": "this.AnimatedImageResource_6BB9235D_7DC1_A577_41C5_F210FCE2E389",
   "yaw": 148.8,
   "hfov": 32.31,
   "pitch": -40.65,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_672B5E2F_7D52_7D54_41CB_7D85E0BC9C44",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 148.8,
   "hfov": 32.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.65
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
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0_HS_1_0.png",
      "width": 1628,
      "class": "ImageResourceLevel",
      "height": 348
     }
    ]
   },
   "pitch": -12,
   "hfov": 48.16,
   "yaw": 174.22,
   "distance": 50
  }
 ],
 "id": "overlay_686F8B27_7DC0_E6D2_41D6_DA20D972682C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0_HS_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 174.22,
   "hfov": 48.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12
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
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F3A2892_7D76_E54F_41DA_5AAE77BAAD78",
   "yaw": 54.32,
   "hfov": 25.18,
   "pitch": -14.5,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_68252691_7D7E_ED4D_41D9_ADB84AE2D91F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 54.32,
   "hfov": 25.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.5
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
   "image": "this.AnimatedImageResource_6F3B4892_7D76_E54F_41D9_271F83D459E7",
   "yaw": -175.74,
   "hfov": 21.66,
   "pitch": -18.58,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6EAB6A41_7D71_A5CD_41D8_736AF0785336",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -175.74,
   "hfov": 21.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "FIRST FLOOR"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6558652B_7E7E_FEB7_41C5_AB5D27924D6B",
   "yaw": 5.83,
   "hfov": 25.22,
   "pitch": 25.43,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6BC3EC3D_7DC0_A336_41D3_D6368ABEE2A0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.83,
   "hfov": 25.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 25.43
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
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_655FF52B_7E7E_FEB7_41C2_6405424BFBBE",
   "yaw": -59.22,
   "hfov": 13.61,
   "pitch": 2.43,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6B36C451_7E5A_7E93_41DE_306DD4ABD0D5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_6_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -59.22,
   "hfov": 13.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.43
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
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_655F252B_7E7E_FEB7_41D5_168889D513E0",
   "yaw": -30.13,
   "hfov": 7.19,
   "pitch": 0.42,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_687C2112_7E66_3691_41D6_8A8B27DEC8C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_7_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -30.13,
   "hfov": 7.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.42
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
  "label": "Operation Theater"
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_8_0.png",
      "width": 830,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ]
   },
   "pitch": -2.24,
   "hfov": 25.1,
   "yaw": -28.73,
   "distance": 50
  }
 ],
 "id": "overlay_6420C5CE_7E66_79F1_41DE_1AE61F34980D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_8_0_map.gif",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -28.73,
   "hfov": 25.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.24
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
  "label": "First Floor"
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
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_9_0.png",
      "width": 1078,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "pitch": 35.74,
   "hfov": 26.47,
   "yaw": 11.55,
   "distance": 50
  }
 ],
 "id": "overlay_64E472E1_7E7A_5BB2_41C8_B51D600BCE59",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_9_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 11.55,
   "hfov": 26.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 35.74
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6F392892_7D76_E54F_41D0_6DC7075DA9E0",
   "yaw": -1.88,
   "hfov": 15.56,
   "pitch": -35.25,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_7286FD31_7D71_BF4D_41C4_E508E3B2AF25",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -1.88,
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.25
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_1_0.png",
      "width": 1140,
      "class": "ImageResourceLevel",
      "height": 230
     }
    ]
   },
   "pitch": -41.51,
   "hfov": 25.62,
   "yaw": 2.24,
   "distance": 50
  }
 ],
 "id": "overlay_6D55527B_7D7E_65BD_41AF_7FC307F8A56E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 2.24,
   "hfov": 25.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.51
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
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_681F39C1_7DC0_A54F_41D3_5D58BBA6044E",
   "yaw": 38.26,
   "hfov": 11.48,
   "pitch": -14.48,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_652E4887_7DC7_A3D2_41DD_7DC5ED4977F0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 38.26,
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.48
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
  "label": "Emergency Ward"
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
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_3_0.png",
      "width": 1065,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -18.46,
   "hfov": 30.32,
   "yaw": 40.39,
   "distance": 50
  }
 ],
 "id": "overlay_6BC7DF9C_7DC7_FDF6_41C1_FAE3EC52886F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_3_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 40.39,
   "hfov": 30.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.46
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0_HS_0_0.png",
      "width": 466,
      "class": "ImageResourceLevel",
      "height": 585
     }
    ]
   },
   "pitch": -2.27,
   "yaw": -145.36,
   "hfov": 14.09
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6AA978A2_7E5A_37B1_41CF_D8BDFB710A4A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "yaw": -145.36,
   "hfov": 14.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.27
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
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0_HS_1_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 197
     }
    ]
   },
   "pitch": -10.06,
   "hfov": 11.19,
   "yaw": -144.82,
   "distance": 50
  }
 ],
 "id": "overlay_6B04A2F7_7E5B_FB9F_41D2_20800EEEC854",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0_HS_1_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": -144.82,
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.06
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
  "label": "Arrow 01"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_71C88AF6_7E26_2B9E_41D1_8F9C15C5456F",
   "yaw": -10.26,
   "hfov": 21.8,
   "pitch": -6.47,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_71671843_7E26_56F7_417C_A5D772124356",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -10.26,
   "hfov": 21.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.47
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72D22D2C_7D96_7A77_41A9_26E52BF9D4F0",
   "yaw": 5.78,
   "hfov": 25.65,
   "pitch": -49.43,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_689BA4AB_7D52_6D5D_41BE_2D1C15A0EC03",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.78,
   "hfov": 25.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
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
   "image": "this.AnimatedImageResource_72D5CD2C_7D96_7A77_41DA_070C819E3B2A",
   "yaw": -24.77,
   "hfov": 16.52,
   "pitch": -25.5,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_691DB5F8_7D52_AEBB_41D1_268A93FF1AC5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -24.77,
   "hfov": 16.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.5
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72D55D2C_7D96_7A77_41B1_D38DA9E5EB58",
   "yaw": -7.99,
   "hfov": 12.91,
   "pitch": -13.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_65A0187C_7D52_65BB_41D6_8E93CFCA67BE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -7.99,
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.12
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
  "label": "Arrow 07"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BBB335D_7DC1_A577_41D5_C1CE6F9C90A1",
   "yaw": 169.06,
   "hfov": 55.61,
   "pitch": 6.97,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6B2A779A_7D52_6B7F_41D7_766576D6C7C9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 169.06,
   "hfov": 55.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.97
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
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72D28D2C_7D96_7A77_41DC_FC92DD88C0E2",
   "yaw": 109.25,
   "hfov": 29.36,
   "pitch": -20.41,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64469F86_7D53_9B57_41D1_A6173291657F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 109.25,
   "hfov": 29.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.41
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
  "label": "Exit to Lobby"
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_5_0.png",
      "width": 1628,
      "class": "ImageResourceLevel",
      "height": 382
     }
    ]
   },
   "pitch": -13.75,
   "hfov": 47.83,
   "yaw": 174.98,
   "distance": 50
  }
 ],
 "id": "overlay_648BC1CE_7DC0_6552_41B3_3292F286C92A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_5_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 174.98,
   "hfov": 47.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.75
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
  "label": "Circle Arrow 02"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BB8735D_7DC1_A577_41D0_784B98E2CD4A",
   "yaw": -82.27,
   "hfov": 24.06,
   "pitch": -3.96,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_68B8733D_7DC7_A536_41D0_AD01C9C74572",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -82.27,
   "hfov": 24.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.96
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
  "label": "Ultrasound Room"
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
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_7_0.png",
      "width": 1896,
      "class": "ImageResourceLevel",
      "height": 830
     }
    ]
   },
   "pitch": 2.06,
   "hfov": 57.33,
   "yaw": -73.37,
   "distance": 50
  }
 ],
 "id": "overlay_685C1FA0_7DC0_BDCE_41CA_1FEA95FF4F41",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_7_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -73.37,
   "hfov": 57.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.06
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
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_69EEB78C_7DC0_EDD6_4191_F4648F6AA8E9",
   "yaw": 89.27,
   "hfov": 29.09,
   "pitch": -28.45,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_73DE91D4_7DC0_A576_41D4_569F9BE19AB0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 89.27,
   "hfov": 29.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.45
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BA2E35E_7DC1_A572_41B9_1B7C59C5BD35",
   "yaw": 19.22,
   "hfov": 23.27,
   "pitch": -19.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6B9C536D_7DC0_A556_41CA_F2240982699E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 19.22,
   "hfov": 23.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.03
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
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_2_0.png",
      "width": 1146,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ]
   },
   "pitch": -10.74,
   "hfov": 34.06,
   "yaw": 30.02,
   "distance": 50
  }
 ],
 "id": "overlay_6A720133_7DC0_E532_41B5_95408E105A92",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_2_0_map.gif",
      "width": 55,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 30.02,
   "hfov": 34.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.74
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
   "image": "this.AnimatedImageResource_69EDC78D_7DC0_EDD6_41D4_5B01E6A84731",
   "yaw": 19.12,
   "hfov": 17.75,
   "pitch": -32.65,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6C9EAE18_7DC3_9EFE_41CE_8BF8579E48E4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 19.12,
   "hfov": 17.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.65
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
  "label": "EXIT To 1st Floor Lobby"
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 332
     }
    ]
   },
   "pitch": -42.52,
   "hfov": 49.07,
   "yaw": 42.96,
   "distance": 50
  }
 ],
 "id": "overlay_6EA2086F_7DC0_A352_41B3_9DB2BF1DD214",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 42.96,
   "hfov": 49.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.52
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
  "label": "Arrow 01 Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6992678D_7DC0_EDD6_41C4_3574C7C4023B",
   "yaw": -4.27,
   "hfov": 24.85,
   "pitch": 2.07,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6D6DA080_7DC0_A3CE_41C6_60267BFCCF48",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -4.27,
   "hfov": 24.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.07
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
  "label": "Blood LAB"
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
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_3_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 818
     }
    ]
   },
   "pitch": -6.97,
   "hfov": 62.34,
   "yaw": 35.55,
   "distance": 50
  }
 ],
 "id": "overlay_6DB8B579_7DC0_AD3E_41D4_FF7079C5EFBA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_3_0_map.gif",
      "width": 40,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 35.55,
   "hfov": 62.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97
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
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5CC3DC56_7E40_6372_41C3_4E4DC6C25314",
   "yaw": 115.98,
   "hfov": 29.91,
   "pitch": -0.77,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6088ABCB_7E40_E553_418D_0740B4D0E472",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 115.98,
   "hfov": 29.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.77
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
  "label": "Speech Therapy Room"
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_1_0.png",
      "width": 1113,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ]
   },
   "pitch": 5.2,
   "hfov": 33.54,
   "yaw": 120.99,
   "distance": 50
  }
 ],
 "id": "overlay_60C21525_7E41_E2D6_41D8_67B547029A5B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_1_0_map.gif",
      "width": 126,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 120.99,
   "hfov": 33.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.2
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_2_0.png",
      "width": 385,
      "class": "ImageResourceLevel",
      "height": 528
     }
    ]
   },
   "pitch": -4.02,
   "yaw": 152.03,
   "hfov": 11.63
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_60BA9336_7E40_6535_41B6_B783AB590B89",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ]
   },
   "yaw": 152.03,
   "hfov": 11.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.02
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
  "label": "Exit"
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
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_3_0.png",
      "width": 830,
      "class": "ImageResourceLevel",
      "height": 212
     }
    ]
   },
   "pitch": -11.62,
   "hfov": 24.61,
   "yaw": 161.28,
   "distance": 50
  }
 ],
 "id": "overlay_6161710B_7E40_E2D3_41C5_A4B30E803D6C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_3_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 161.28,
   "hfov": 24.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.62
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BB9B35D_7DC1_A577_41DE_BE73462F02AD",
   "yaw": 58.81,
   "hfov": 30.38,
   "pitch": -39.3,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6B28F308_7D5E_EB5B_41BD_252F880FB4F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 58.81,
   "hfov": 30.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.3
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0_HS_0_0.png",
      "width": 523,
      "class": "ImageResourceLevel",
      "height": 556
     }
    ]
   },
   "pitch": -2.83,
   "yaw": -98.48,
   "hfov": 15.81
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5E41F33A_7E40_E532_41C0_14B4EBF91805",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "yaw": -98.48,
   "hfov": 15.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.83
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
  "label": "Exit"
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
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0_HS_1_0.png",
      "width": 830,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ]
   },
   "pitch": -12.12,
   "hfov": 24.56,
   "yaw": -90.06,
   "distance": 50
  }
 ],
 "id": "overlay_5F7B6C3B_7E4F_A332_41D4_61A4F3800EEF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0_HS_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -90.06,
   "hfov": 24.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.12
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
  "label": "Arrow 01 Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_69EC678C_7DC0_EDD6_41C2_B54346B5E19B",
   "yaw": -60.67,
   "hfov": 27.93,
   "pitch": 6.97,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6CE9A4D1_7DC0_634E_41C0_E244F1BE4B23",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -60.67,
   "hfov": 27.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.97
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 331
     }
    ]
   },
   "pitch": -6.09,
   "hfov": 69.2,
   "yaw": -30.4,
   "distance": 50
  }
 ],
 "id": "overlay_6DF1412F_7DC0_62D2_41D1_42FC49B4E527",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_1_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -30.4,
   "hfov": 69.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15); this.mainPlayList.set('selectedIndex', 18)",
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
   "image": "this.AnimatedImageResource_69ECF78D_7DC0_EDD6_41C7_B58DF3C3779B",
   "yaw": -103.92,
   "hfov": 31.45,
   "pitch": -36.49,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6E40D8D5_7DC1_E377_41D6_96A12D36A7F9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -103.92,
   "hfov": 31.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.49
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
  "label": "Blood Donation Room"
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
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_3_0.png",
      "width": 1744,
      "class": "ImageResourceLevel",
      "height": 307
     }
    ]
   },
   "pitch": -47.54,
   "hfov": 35.61,
   "yaw": -115.44,
   "distance": 50
  }
 ],
 "id": "overlay_6C8CCA2D_7DC0_A6D6_41B9_E0D01E4B15CE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_3_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -115.44,
   "hfov": 35.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.54
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
  "label": "Towards Labour Room"
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_1_0.png",
      "width": 1901,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ]
   },
   "pitch": -28.63,
   "hfov": 50.49,
   "yaw": -152.12,
   "distance": 50
  }
 ],
 "id": "overlay_682A36E6_7DC3_AF52_41D7_DB3D8D2C98B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_1_0_map.gif",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -152.12,
   "hfov": 50.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.63
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
  "label": "Arrow 07"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BBE235E_7DC1_A575_41DA_95DC2BF8DC19",
   "yaw": -140.37,
   "hfov": 21.88,
   "pitch": -1.03,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6843B683_7DC0_6FD2_41C8_E027366B3262",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -140.37,
   "hfov": 21.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.03
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
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BBFD35E_7DC1_A575_41D8_9191D1723B77",
   "yaw": -147.29,
   "hfov": 23.24,
   "pitch": -45.43,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6A4896FF_7DC0_6F32_41CD_03099B128F34",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -147.29,
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.43
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
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_4_0.png",
      "width": 830,
      "class": "ImageResourceLevel",
      "height": 830
     }
    ]
   },
   "pitch": -1.95,
   "hfov": 25.11,
   "yaw": -133.78,
   "distance": 50
  }
 ],
 "id": "overlay_6A32BCAE_7DC0_A3D2_41D8_722904C88259",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_4_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -133.78,
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.95
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
  "label": "Arrow 06a Left-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72D33D2C_7D96_7A77_41D9_1D5AC24FE6C4",
   "yaw": -107.18,
   "hfov": 34.32,
   "pitch": -46.29,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_64BFCB62_7D56_9BCF_41B3_5B37CDC6AB7D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -107.18,
   "hfov": 34.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.29
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
  "label": "Towards Deptartment of Medicine"
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
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0_HS_1_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 223
     }
    ]
   },
   "pitch": -7.86,
   "hfov": 86.36,
   "yaw": -113.38,
   "distance": 50
  }
 ],
 "id": "overlay_67ABDAA2_7DC1_A7D2_41D0_130C857851E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0_HS_1_0_map.gif",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -113.38,
   "hfov": 86.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.86
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
  "label": "Arrow 06a Right-Up"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_6BBC635E_7DC1_A572_41C2_92B892983430",
   "yaw": -103.17,
   "hfov": 47.15,
   "pitch": -27.57,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6030BD3E_7DB1_9FB7_41DE_4E89364B17D7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -103.17,
   "hfov": 47.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.57
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
  "label": "Private Block Rooms"
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_0_0.png",
      "width": 1659,
      "class": "ImageResourceLevel",
      "height": 206
     }
    ]
   },
   "pitch": 2.14,
   "hfov": 50.15,
   "yaw": 103.43,
   "distance": 50
  }
 ],
 "id": "overlay_72F6A1D0_7DC0_E54E_41CD_9547FF6CFACC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_0_0_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "yaw": 103.43,
   "hfov": 50.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.14
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
  "label": "Towards Laboratories"
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_2_0.png",
      "width": 1760,
      "class": "ImageResourceLevel",
      "height": 226
     }
    ]
   },
   "pitch": -4.05,
   "hfov": 53.1,
   "yaw": -104.13,
   "distance": 50
  }
 ],
 "id": "overlay_72895683_7DC0_AFD2_41D6_57E7B0EC8389",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_2_0_map.gif",
      "width": 124,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -104.13,
   "hfov": 53.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.05
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
  "label": "Arrow 06a Right"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5CC78C55_7E40_6376_41CA_62442F9121F1",
   "yaw": 167.9,
   "hfov": 14.24,
   "pitch": -6.26,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6BB19F2B_7DCF_9ED3_41DA_7E7AF6E84847",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 167.9,
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.26
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
  "label": "Towards ICU and NICU"
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_4_0.png",
      "width": 1177,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": -5.44,
   "hfov": 35.46,
   "yaw": 146.01,
   "distance": 50
  }
 ],
 "id": "overlay_6BDFF338_7DC0_653D_41C8_EB50DA387775",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_4_0_map.gif",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 146.01,
   "hfov": 35.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.44
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
  "label": "Arrow 01 Right"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_61E1D881_7DC1_A3CE_41D0_84BF63E47AAA",
   "yaw": -47.76,
   "hfov": 13.51,
   "pitch": 0.73,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_672EB391_7DC0_65CE_41DB_43C7354A7365",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -47.76,
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.73
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
  "label": "Back Down"
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_6_0.png",
      "width": 1570,
      "class": "ImageResourceLevel",
      "height": 307
     }
    ]
   },
   "pitch": -9.86,
   "hfov": 46.78,
   "yaw": -33.66,
   "distance": 50
  }
 ],
 "id": "overlay_6764E76C_7DC1_ED56_41D8_A802136E7210",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_6_0_map.gif",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -33.66,
   "hfov": 46.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.86
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
  "label": "Arrow 06b"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5CC09C55_7E40_6376_41DA_8C41467C5F26",
   "yaw": -117.72,
   "hfov": 11.19,
   "pitch": -15.62,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_62C60345_7E40_E556_41D0_CD6B2A64008B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_7_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -117.72,
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.62
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
   "image": "this.AnimatedImageResource_5CC0EC55_7E40_6376_41D4_1DDF11142A5B",
   "yaw": -171.68,
   "hfov": 12.7,
   "pitch": -7.69,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_5FD7C453_7E43_E372_41AC_4476F5CC365E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_8_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -171.68,
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.69
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
  "label": "Physio and Speech\u000d Therapy\u000d Rooms"
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
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_9_0.png",
      "width": 1303,
      "class": "ImageResourceLevel",
      "height": 472
     }
    ]
   },
   "pitch": 2.32,
   "hfov": 39.4,
   "yaw": -157.69,
   "distance": 50
  }
 ],
 "id": "overlay_63B9DFF3_7E43_BD32_41D5_D5F6533735C2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_9_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -157.69,
   "hfov": 39.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.32
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
   "image": "this.AnimatedImageResource_72D10D2D_7D96_7A71_41DC_8070FB2EADE5",
   "yaw": -12.3,
   "hfov": 26.95,
   "pitch": -20.05,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_654C8C6A_7DBF_9DDF_41C8_02B4AB9E2C1C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -12.3,
   "hfov": 26.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.05
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
  "label": "Towards ICU"
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_2_0.png",
      "width": 1398,
      "class": "ImageResourceLevel",
      "height": 430
     }
    ]
   },
   "pitch": -32.58,
   "hfov": 35.64,
   "yaw": -8.62,
   "distance": 50
  }
 ],
 "id": "overlay_72A4F86D_7D92_53D6_41C4_84EEDA2A1E25",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_2_0_map.gif",
      "width": 52,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -8.62,
   "hfov": 35.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.58
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
  "label": "EXIT "
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
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_3_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 340
     }
    ]
   },
   "pitch": -15.48,
   "hfov": 60.7,
   "yaw": -120.88,
   "distance": 50
  }
 ],
 "id": "overlay_6803194A_7DC0_6552_41DF_53505F1B9E93",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_3_0_map.gif",
      "width": 96,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -120.88,
   "hfov": 60.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.48
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
  "label": "Arrow 07"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5F439605_7DC0_AED7_41DB_54A80C658C3E",
   "yaw": -146.34,
   "hfov": 25.07,
   "pitch": -3.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66004515_7DC0_62F6_4161_88F67DBC430F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -146.34,
   "hfov": 25.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.71
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
  "label": "Arrow 06a Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_72D04D2D_7D96_7A71_4191_CB7E58F84B34",
   "yaw": 5.53,
   "hfov": 34.92,
   "pitch": -0.44,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_66B4B262_7DAE_E5CF_41D7_75DEB149AA7E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 5.53,
   "hfov": 34.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44
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
   "image": "this.AnimatedImageResource_72D00D2D_7D96_7A71_41B1_7DBDB5B4028E",
   "yaw": 146.32,
   "hfov": 25.85,
   "pitch": -48.73,
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_616C8DC5_7DAE_BED5_41C0_C57E0C55CFEB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 146.32,
   "hfov": 25.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.73
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
  "label": "EXIT TO MAIN LOBBY"
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 728
     }
    ]
   },
   "pitch": -16.77,
   "hfov": 67.59,
   "yaw": 15.58,
   "distance": 50
  }
 ],
 "id": "overlay_68391E90_7DFF_BFCE_4192_137D67852618",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_2_0_map.gif",
      "width": 45,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 15.58,
   "hfov": 67.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.77
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
  "label": "STAGE III ROOM"
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
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_3_0.png",
      "width": 1686,
      "class": "ImageResourceLevel",
      "height": 266
     }
    ]
   },
   "pitch": -54.84,
   "hfov": 29.37,
   "yaw": 126.14,
   "distance": 50
  }
 ],
 "id": "overlay_659DF795_7DC0_ADF6_41DC_B9B4EF87DBE3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_3_0_map.gif",
      "width": 101,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 126.14,
   "hfov": 29.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -54.84
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
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_1_HS_0_0.png",
      "width": 1092,
      "class": "ImageResourceLevel",
      "height": 1284
     }
    ]
   },
   "pitch": -5.65,
   "yaw": -17.38,
   "hfov": 32.88
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_6B65E93B_7D5E_67BD_41DE_DCC75501D053",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ]
   },
   "yaw": -17.38,
   "hfov": 32.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.65
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
   "image": "this.AnimatedImageResource_69EF678C_7DC0_EDD6_41A3_864661B688CD",
   "yaw": -139.18,
   "hfov": 24.11,
   "pitch": -36.24,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_732146FA_7DC0_6F32_41C9_5A8D3CD00738",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -139.18,
   "hfov": 24.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.24
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6BB9235D_7DC1_A577_41C5_F210FCE2E389",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_6F3A2892_7D76_E54F_41DA_5AAE77BAAD78",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_6F3B4892_7D76_E54F_41D9_271F83D459E7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_1_HS_2_0.png",
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
 "id": "AnimatedImageResource_6558652B_7E7E_FEB7_41C5_AB5D27924D6B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_5_0.png",
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
 "id": "AnimatedImageResource_655FF52B_7E7E_FEB7_41C2_6405424BFBBE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_6_0.png",
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
 "id": "AnimatedImageResource_655F252B_7E7E_FEB7_41D5_168889D513E0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707826DA_7D5E_6AFF_41DA_BC09F2CC0BCB_0_HS_7_0.png",
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
 "id": "AnimatedImageResource_6F392892_7D76_E54F_41D0_6DC7075DA9E0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_1_HS_0_0.png",
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
 "id": "AnimatedImageResource_681F39C1_7DC0_A54F_41D3_5D58BBA6044E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_73C98D3B_7D5E_7FBD_41D2_65DAD49FB881_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_71C88AF6_7E26_2B9E_41D1_8F9C15C5456F",
 "frameDuration": 76,
 "levels": [
  {
   "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_72D22D2C_7D96_7A77_41A9_26E52BF9D4F0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_72D5CD2C_7D96_7A77_41DA_070C819E3B2A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_72D55D2C_7D96_7A77_41B1_D38DA9E5EB58",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_2_0.png",
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
 "id": "AnimatedImageResource_6BBB335D_7DC1_A577_41D5_C1CE6F9C90A1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_72D28D2C_7D96_7A77_41DC_FC92DD88C0E2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_4_0.png",
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
 "id": "AnimatedImageResource_6BB8735D_7DC1_A577_41D0_784B98E2CD4A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0_HS_6_0.png",
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
 "id": "AnimatedImageResource_69EEB78C_7DC0_EDD6_4191_F4648F6AA8E9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_6BA2E35E_7DC1_A572_41B9_1B7C59C5BD35",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0_HS_1_0.png",
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
 "id": "AnimatedImageResource_69EDC78D_7DC0_EDD6_41D4_5B01E6A84731",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_6992678D_7DC0_EDD6_41C4_3574C7C4023B",
 "frameDuration": 76,
 "levels": [
  {
   "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0_HS_2_0.png",
   "width": 300,
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
 "id": "AnimatedImageResource_5CC3DC56_7E40_6372_41C3_4E4DC6C25314",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_6BB9B35D_7DC1_A577_41DE_BE73462F02AD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_69EC678C_7DC0_EDD6_41C2_B54346B5E19B",
 "frameDuration": 100,
 "levels": [
  {
   "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_0_0.png",
   "width": 300,
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
 "id": "AnimatedImageResource_69ECF78D_7DC0_EDD6_41C7_B58DF3C3779B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0_HS_2_0.png",
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
 "id": "AnimatedImageResource_6BBE235E_7DC1_A575_41DA_95DC2BF8DC19",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_6BBFD35E_7DC1_A575_41D8_9191D1723B77",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0_HS_3_0.png",
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
 "id": "AnimatedImageResource_72D33D2C_7D96_7A77_41D9_1D5AC24FE6C4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_6BBC635E_7DC1_A572_41C2_92B892983430",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_5CC78C55_7E40_6376_41CA_62442F9121F1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_61E1D881_7DC1_A3CE_41D0_84BF63E47AAA",
 "frameDuration": 83,
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_5_0.png",
   "width": 300,
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
 "id": "AnimatedImageResource_5CC09C55_7E40_6376_41DA_8C41467C5F26",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_7_0.png",
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
 "id": "AnimatedImageResource_5CC0EC55_7E40_6376_41D4_1DDF11142A5B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0_HS_8_0.png",
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
 "id": "AnimatedImageResource_72D10D2D_7D96_7A71_41DC_8070FB2EADE5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_5F439605_7DC0_AED7_41DB_54A80C658C3E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0_HS_4_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_72D04D2D_7D96_7A71_4191_CB7E58F84B34",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_0_0.png",
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
 "id": "AnimatedImageResource_72D00D2D_7D96_7A71_41B1_7DBDB5B4028E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0_HS_1_0.png",
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
 "id": "AnimatedImageResource_69EF678C_7DC0_EDD6_41A3_864661B688CD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
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
