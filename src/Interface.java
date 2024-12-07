import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class Interface extends Application{
    public void start(Stage primaryStage) {
        VBox root = new VBox(10);

        // Exemple de joueur
        Joueur joueur = new Joueur("Joueur 1");
        Deck deck = new Deck();
        deck.melanger();
        for (int i = 0; i < 4; i++) {
            joueur.recevoirCarte(deck.tirerCarte());
        }

        HBox cartesBox = new HBox(10);
        for (Carte carte : joueur.getMain()) {
            cartesBox.getChildren().add(new Button(carte.toString()));
        }

        root.getChildren().addAll(cartesBox);
        Scene scene = new Scene(root, 600, 400);
        primaryStage.setTitle("Mus - Interface Graphique");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
