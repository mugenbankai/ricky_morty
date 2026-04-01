import { forwardRef } from "react";

const EvaluationModal = forwardRef(({ data, characterName }, ref) => {
  const handleClose = () => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className="evaluation-modal">
      <div className="modal-content">
        <h2>Évaluation soumise</h2>
        <p>Merci pour votre évaluation de {characterName}</p>

        <div className="modal-summary">
          <p>
            <strong>Nom:</strong> {data.evaluatorName}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Note:</strong> {data.rating}/5
          </p>
          {data.comment && (
            <p>
              <strong>Commentaire:</strong> {data.comment}
            </p>
          )}
        </div>

        <button className="modal-close-btn" onClick={handleClose}>
          Fermer
        </button>
      </div>
    </dialog>
  );
});

EvaluationModal.displayName = "EvaluationModal";

export default EvaluationModal;
