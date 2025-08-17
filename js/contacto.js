document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');
if (!form) return;
const submitBtn = form.querySelector('button[type="submit"]');
const showAlert = (type, msg) => {
const existing = form.querySelector('.form-alert');
if (existing) existing.remove();
const a = document.createElement('div');
a.className = `alert alert-${type} form-alert`;
                                a.role = 'alert';
                                a.textContent = msg;
                                form.prepend(a);
                                setTimeout(() => a.remove(), 7000);
                            };

                            form.addEventListener('submit', async (e) => {
                                e.preventDefault();
                                submitBtn.disabled = true;
                                const formData = new FormData(form);

                                try {
                                    const resp = await fetch(form.action, {
                                        method: 'POST',
                                        body: formData,
                                        headers: { 'Accept': 'application/json' }
                                    });

                                    if (resp.ok) {
                                        showAlert('success', 'Consulta enviada correctamente. Te contactaremos pronto.');
                                        form.reset();
                                    } else {
                                        const data = await resp.json().catch(() => ({}));
                                        showAlert('danger', data.error || 'Hubo un error al enviar. Intenta nuevamente.');
                                    }
                                } catch (err) {
                                    showAlert('danger', 'Error de red. Intenta más tarde.');
                                } finally {
                                    submitBtn.disabled = false;
                                }
                            });
                        });