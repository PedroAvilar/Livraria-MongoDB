import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LivroListaComponent } from "./livro-lista/livro-lista.component";
import { LivroDadosComponent } from "./livro-dados/livro-dados.component";
import { ControleEditoraService } from "./controle-editora.service";
import { ControleLivrosService } from "./controle-livros.service";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        LivroDadosComponent,
        LivroListaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        ControleEditoraService,
        ControleLivrosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}