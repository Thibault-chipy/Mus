import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Deck {
    private ArrayList<Carte> cartes;

    public Deck() {
        cartes = new ArrayList<Cartes>();
        String[] familles = {"Epées", "Pièces", "Bâtons", "Coupes"};
        int[] valeurs = {1, 2, 3, 4, 5, 6, 7, 10, 11, 12};

        for (String famille : familles) {
            for (int valeur : valeurs) {
                cartes.add(new Carte(valeur, famille));
            }
        }
    }

    public void melanger() {
        Collections.shuffle(cartes);
    }

    public Carte tirerCarte() {
        return cartes.remove(0);
    }
}
