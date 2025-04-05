package api_clientes.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import java.util.List;

@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/clientes/{clienteId}/contatos")
    public List<Contato> getContatosPorCliente(@PathVariable Long clienteId) {
        return contatoRepository.findByClienteId(clienteId);
    }

    @GetMapping("/contatos/{id}")
    public ResponseEntity<Contato> buscarContatoPorId(@PathVariable Long id) {
        Optional<Contato> contato = contatoRepository.findById(id);
        return contato.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<Contato> listarContatos() {
        return contatoRepository.findAll();
    }

    @PostMapping("/{clienteId}")
    public ResponseEntity<Contato> adicionarContato(@PathVariable Long clienteId, @RequestBody Contato contato) {
        return clienteRepository.findById(clienteId).map(cliente -> {
            contato.setCliente(cliente);
            Contato novoContato = contatoRepository.save(contato);
            return ResponseEntity.ok(novoContato);
        }).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/contatos/{contatoId}")
    public ResponseEntity<Contato> atualizarContato(@PathVariable Long contatoId, @RequestBody Contato contato) {
    return contatoRepository.findById(contatoId).map(existingContato -> {
        existingContato.setTipoContato(contato.getTipoContato());
        existingContato.setValorContato(contato.getValorContato());
        existingContato.setObservacao(contato.getObservacao());
        Contato contatoAtualizado = contatoRepository.save(existingContato);
        return ResponseEntity.ok(contatoAtualizado);
    }).orElse(ResponseEntity.notFound().build());
}


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarContato(@PathVariable Long id) {
        if (contatoRepository.existsById(id)) {
            contatoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
