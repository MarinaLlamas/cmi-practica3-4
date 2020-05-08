function Movie_OnStart(){
StackTrace="Al Iniciar";
SoundSetPosition("Musica1",0);
VideoSetVolume("video",0);
VideoSetPosition("video",0);
VideoPlay("video");

}

function MUSICA_OnClick(){
StackTrace="MUSICA.Al Hacer Clic";
GotoSceneName("MUSICA");

}

function SONIDO_OnClick(){
StackTrace="SONIDO.Al Hacer Clic";
VideoSetVolume("video",100);

}

function SONIDO_OnRelease(){
StackTrace="SONIDO.Al Liberar";
VideoSetVolume("video",0);

}

function PAUSAPLAY_OnClick(){
StackTrace="PAUSA-PLAY.Al Hacer Clic";
VideoPause("video");

}

function PAUSAPLAY_OnRelease(){
StackTrace="PAUSA-PLAY.Al Liberar";
VideoResume("video");

}

function Musica_OnClick(){
StackTrace="Musica.Al Hacer Clic";
SoundResume("Musica1");

}

function Musica_OnRelease(){
StackTrace="Musica.Al Liberar";
SoundPause("Musica1");

}

function Volver_OnClick(){
StackTrace="Volver.Al Hacer Clic";
SceneFirst();

}

