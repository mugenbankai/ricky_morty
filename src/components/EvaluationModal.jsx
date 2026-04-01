import { forwardRef } from "react";

const EvaluationModal = forwardRef(({ data, characterName }, ref) => {
  const handleClose = () => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} className="evaluation-modal">
      <div className="modal-content">
        <h2>Évaluation soumise</h2>
        <p className="modal-character">
          Personnage: <strong>{characterName}</strong>
        </p>

        <div className="modal-data">
          <div className="data-item">
            <span className="data-label">Évaluateur:</span>
            <span className="data-value">{data.evaluatorName}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Email:</span>
            <span className="data-value">{data.email}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Note:</span>
            <span className="data-value rating">{data.rating} ⭐</span>
          </div>
          {data.comment && (
            <div className="data-item">
              <span className="data-label">Commentaire:</span>
              <p className="data-value comment">{data.comment}</p>
            </div>
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
