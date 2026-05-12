"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './NotificationCenter.module.css';
import Link from 'next/link';

interface Notification {
  id: string;
  title: string;
  message: string;
  link: string | null;
  isRead: boolean;
  type: string;
  createdAt: string;
}

export default function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000); // Revisar cada 10 segundos para pruebas
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications');
      if (res.ok) {
        const data = await res.json();
        setNotifications(data);
        setUnreadCount(data.filter((n: Notification) => !n.isRead).length);
      }
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };

  const markAsRead = async (id?: string) => {
    try {
      const res = await fetch('/api/notifications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (res.ok) {
        if (id) {
          setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
        } else {
          setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
        }
        setUnreadCount(prev => id ? Math.max(0, prev - 1) : 0);
      }
    } catch (error) {
      console.error("Error marking notification as read", error);
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-AR', { 
      day: 'numeric', 
      month: 'short', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={styles.bellBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notificaciones"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.header}>
            <h3>Notificaciones</h3>
            {unreadCount > 0 && (
              <button className={styles.markAllBtn} onClick={() => markAsRead()}>
                Marcar todas como leídas
              </button>
            )}
          </div>

          <div className={styles.list}>
            {notifications.length === 0 ? (
              <div className={styles.empty}>No tienes notificaciones por el momento.</div>
            ) : (
              notifications.map((notif) => (
                <Link 
                  key={notif.id} 
                  href={notif.link || '#'} 
                  className={`${styles.notification} ${!notif.isRead ? styles.unread : ''}`}
                  onClick={() => {
                    if (!notif.isRead) markAsRead(notif.id);
                    setIsOpen(false);
                  }}
                >
                  <span className={styles.notifTitle}>{notif.title}</span>
                  <span className={styles.notifMessage}>{notif.message}</span>
                  <span className={styles.notifDate}>{formatDate(notif.createdAt)}</span>
                </Link>
              ))
            )}
          </div>

          <div className={styles.footer}>
            <Link href="/dashboard/notifications" className={styles.viewAll} onClick={() => setIsOpen(false)}>
              Ver todas mis alertas
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
